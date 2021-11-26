let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/badut.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

}

handler.customPrefix = /^(badut|Badut|bahan gabut|Bahan Gabut|🤡)?$/i
handler.command = new RegExp

module.exports = handler