let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_Wait for a while. . ._')
  let text = args.join` `
  let p = await (await  fetch('https://api.zeks.xyz/api/flametext?apikey=apivinz&text=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'here it is', m)
}
handler.help = ['flametext <Teks>']
handler.tags = ['logo']
handler.command = /^flametext$/i
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