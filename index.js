
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const { state, saveState } = useSingleFileAuthState('./auth_info.json')
const qrcode = require('qrcode-terminal')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const config = require('./config.json')

// Keep-alive endpoint for Render
app.get('/', (req, res) => res.send('CYBER-MD bot is running'))
app.listen(PORT, () => console.log(`Web server running on port ${PORT}`))

async function startBot() {
  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    logger: require('pino')({ level: 'silent' })
  })

  sock.ev.on('creds.update', saveState)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect.error = Boom)?.output?.statusCode !== DisconnectReason.loggedOut
      if (shouldReconnect) startBot()
    } else if (connection === 'open') {
      console.log('Bot connected')
    }
  })

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const sender = msg.key.remoteJid
    const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text

    if (!text) return

    // Only allow messages from the owner
    if (!msg.key.participant?.includes(config.ownerNumber) && !sender.includes(config.ownerNumber)) return

    if (text.toLowerCase() === 'menu') {
      await sock.sendMessage(sender, { text: 'CYBER-MD Menu:\n\n- menu\n- ping\n- alive\n- repo' })
    } else if (text.toLowerCase() === 'ping') {
      await sock.sendMessage(sender, { text: 'Pong!' })
    } else if (text.toLowerCase() === 'alive') {
      await sock.sendMessage(sender, { text: 'CYBER-MD is alive and working.' })
    } else if (text.toLowerCase() === 'repo') {
      await sock.sendMessage(sender, { text: 'Coming soon: GitHub repo link.' })
    }
  })
}

startBot()
