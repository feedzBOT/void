let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/hentaigif?APIKEY=5d975a4873ab86bb`
  conn.sendFile(m.chat, res, 'hentai.gif', `wangy wangy wangy`, m, false)
}
handler.help = ['hentaigif'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(hentaigif)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

