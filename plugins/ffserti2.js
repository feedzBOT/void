let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_wait for a moment. . ._')
  let text = args.join` `
  let p = await (await  fetch('https://onlydevcity.xyz/FFSerti2/img.php?nama=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'JKNbot!!!', m)
}
handler.help = ['ffcert2 <text>']
handler.tags = ['ffcert2']
handler.command = /^ffcert2$/i
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