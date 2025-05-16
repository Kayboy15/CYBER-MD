
const { default: makeWASocket, useSingleFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, useInitAuthCreds } = require('@whiskeysockets/baileys')
const { makeInMemoryStore } = require('@whiskeysockets/baileys')
const { delay } = require('@whiskeysockets/baileys')
const P = require('pino')
const express = require('express')
const config = require('./config.json')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (_, res) => res.send('CYBER-MD is running with pairing code'))
app.listen(PORT, () => console.log(`Web server running on port ${PORT}`))

const startBot = async () => {
  const { version } = await fetchLatestBaileysVersion()
  const store = makeInMemoryStore({ logger: P().child({ level: 'silent' }) })
  const { state, saveCreds } = await useInitAuthCreds()

  const sock = makeWASocket({
    version,
    printQRInTerminal: false,
    auth: state,
    logger: P({ level: 'silent' }),
    generateHighQualityLinkPreview: true,
    browser: ['CYBER-MD', 'Safari', '1.0.0']
  })

  store.bind(sock.ev)

  sock.ev.on('connection.update', async ({ connection, lastDisconnect, isNewLogin, qr, pairingCode }) => {
    if (connection === 'connecting') {
      console.log('Connecting...')
    } else if (connection === 'open') {
      console.log('Bot connected successfully!')
    } else if (connection === 'close') {
      console.log('Connection closed, reconnecting...')
      startBot()
    }
    if (pairingCode) {
      console.log('\n=== Pairing Code ===')
      console.log(`Pair this device on your WhatsApp: ${pairingCode}\n`)
    }
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const sender = msg.key.remoteJid
    const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text

    if (!text) return
    if (!sender.includes(config.ownerNumber)) return

    const reply = (txt) => sock.sendMessage(sender, { text: txt })

    switch (text.toLowerCase()) {
      case 'menu':
        return reply('CYBER-MD Menu:\n- menu\n- ping\n- alive\n- repo')
      case 'ping':
        return reply('Pong!')
      case 'alive':
        return reply('CYBER-MD is alive and running.')
      case 'repo':
        return reply('Coming soon...')
    }
  })
}

startBot()
