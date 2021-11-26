let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/YNTKTS.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

}

handler.customPrefix = /^(YNTKTS|gtw|Gtw|yntkts|gatau|Gatau)?$/i
handler.command = new RegExp

module.exports = handler