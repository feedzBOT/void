let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/pembohong.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

}

handler.customPrefix = /^(Y|iya|Iya|boong|bohong|Bohong)?$/i
handler.command = new RegExp

module.exports = handler