

require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "263789745277"
global.namaowner = "Keith-Tech" 

//======== Setting Bot & Link ========//
global.namabot = "*ᴄʏʙᴇʀ-ᴍᴅ*" 
global.version = "v1"
global.foother = "created by kayboy"
global.linkgc = 'https://chat.whatsapp.com/HEcYRhVMKFI0392aP02ocB'

global.linksaluran = "https://whatsapp.com/channel/0029Vb5SP7IDjiOfSjLKlB2Y"

global.linkyt = 'https://youtube.com/@Kayboy154'

global.packname = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ  keith"
global.author = "Keith-Tech"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true
global.autoreadsw = true  // Auto read status
global.autolikesw = true  // Auto like status (❤️)
global.alwaysonline= true

//========= Setting Message =========//
global.msg = {
    "error": "🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!",
    "done": "✅ *Mission Accomplished!* All systems go, Mk finished the task!", 
    "wait": "⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.", 
    "group": "*• Group Only* This feature is only for groups!", 
    "private": "*• Private Chat* This feature is only for private chats!", 
    "admin": "*• Admin Only* This feature is only for group admins!", 
    "adminbot": "*• Bot Admin* This feature can be used when the bot is an admin", 
    "owner": " 🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!", 
    "developer": "*• Developer Only* This feature is only for developers"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

