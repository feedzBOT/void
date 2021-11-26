let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/tidak.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

}

handler.customPrefix = /^(tidak semudah itu ferguso|oi|Tidak semudah itu ferguso|minta stiker|Minta stiker|minta plugin|Minta plugin|minta plugin bang|Minta plugin bang)?$/i
handler.command = new RegExp

module.exports = handler