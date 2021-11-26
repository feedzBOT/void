let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_Wait a moment. . ._')
  let text = args.join` `
  let p = await (await  fetch('https://onlydevcity.xyz/HekerSerti/img.php?nama=pee' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'cool isn`t it? yes it`s cool!!!', m)
}
handler.help = ['hackercert <Teks>']
handler.tags = ['tools']
handler.command = /^hackercert/i
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