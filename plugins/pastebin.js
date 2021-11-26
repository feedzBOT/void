let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Enter Text', m)

  await m.reply('Searching...')
	axios.get(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`).then ((res) => {
	 	let hasil = `Here's your pastebin link so it's done\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['pastebin'].map(v => v + ' <opsional>')
handler.tags = ['tools']
handler.command = /^(pastebin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler