let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p, command }) => {
conn.send2Button(m.chat, 'PILIH MODE', '@Sakura さくら', 'PUBLIC', '.enable public', 'SELF', '.disable public',m)
}

handler.help = ['set']
handler.tags = ['owner']
handler.command = /^set$/i
handler.owner = true
handler.botAdmin = false

module.exports = handler