let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_wait for a while. . ._')
  let text = args.join` `
  let p = await (await  fetch('http://docs-jojo.herokuapp.com/api/gaming?text=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'cool isn`t it? yeah that`s cool!!!', m)
}
handler.help = ['logogaming <text>']
handler.tags = ['logo']
handler.command = /^logogaming$/i
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