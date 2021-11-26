let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/ngakak.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

}

handler.customPrefix = /^(hahahaha|wkwkwkwk|wkwk|Ngkk|haha|Haha|ngkk|awokawokawok)?$/i
handler.command = new RegExp

module.exports = handler