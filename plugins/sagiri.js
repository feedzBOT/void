let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
   conn.sendMessage(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=fe3912c1406cbe694ac3b09b', '', '', m, false)
}
handler.help = ['sagiri']
handler.tags = ['wibu']
handler.command = /^sagiri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler