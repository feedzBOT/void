let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_Wait for a moment. . ._')
  let text = args.join` `
  let p = await (await  fetch('https://onlydevcity.xyz/FFSerti/img.php?nama=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'Here it is', m)
}
handler.help = ['ffcert <text>']
handler.tags = ['cert']
handler.command = /^ffcert$/i
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