let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('Searching...')
let str = `
stupid repentance
`.trim()

    axios.get('https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633')
    .then((res) => {
      imageToBase64(res.data.result.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        })
    })
}
handler.help = ['hentai']
handler.tags = ['anime']
handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 10

module.exports = handler
