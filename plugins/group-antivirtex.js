let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `* Incorrect Format! Example :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].novirtex
	if(cek) return conn.reply(m.chat, `*Anti-Virtex been actived in this group.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].novirtex = true
		conn.reply(m.chat, `*Anti-Virtex activated successfully.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].novirtex
	if(!cek) return conn.reply(m.chat, `*Anti-Virtex has been deactivated in this group.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].novirtex = false
		conn.reply(m.chat, `*Anti-Virtex has been deactivated successfully.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Incorrect Format! Example :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
handler.help = ['antivirtex *on / off*']
handler.tags = ['group']
handler.command = /^(antivirtex)$/i
handler.owner = false
handler.admin = true
handler.premium = false
handler.group = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler