let handler = async (m) => {
m.reply('*Tunggu Sebentar, Sekitar 1menit yaa*')
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jangan Sagne Bang', m)
}
handler.help = ['sange']
handler.tags = ['dewasa']

handler.command = /^sange$/i
handler.limit = 3
handler.register = true
module.exports = handler