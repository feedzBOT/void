let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Mohon Tunggu Sebentar Ya Sayang...*')
  let res = `http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=fe3912c1406cbe694ac3b09b`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['quotesimg'].map(v => v + ' <teks>')
handler.tags = ['image']
handler.command = /^(quotesimg)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
