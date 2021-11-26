let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/cepak.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

}

handler.customPrefix = /^(pak cepak cepak cepak jederrrr|Pak cepak cepak cepak jederrrr|Pak cepak cepak jedderr)?$/i
handler.command = new RegExp

module.exports = handler