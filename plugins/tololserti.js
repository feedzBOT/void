let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_wait a moment. . ._')
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'enter the text',m)
  let p = await (await fetch('https://tolol.ibnux.com/img.php?nama=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , '', m)
}
handler.help = ['stupidcert <text>']
handler.tags = ['serti']
handler.command = /^stupidcert/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

