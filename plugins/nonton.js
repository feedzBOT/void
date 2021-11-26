let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Enter Movie Name Boss', m)

	axios.get(`https://tobz-api.herokuapp.com/api/film?q=${text}&apikey=BotWeA`).then ((res) => {
	 	let hasil = `*WATCHING FILM*\n\nTitle: ${res.data.result.judul}\nGenre : ${res.data.result.genre_negara}\nRating : ${res.data.result.rating}\nLink : ${res.data.result.link}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['watch'].map(v => v + ' <film>')
handler.tags = ['tools']
handler.command = /^(watch)$/i
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