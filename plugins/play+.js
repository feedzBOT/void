let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

// Mau beli fitur ke Bot Kuhong? Cukup hubungi :
// WA : wa.me/+62895337278647

let handler = async(m, { conn, text }) => {
try {
goblok = `Cari `
gblk = `apa` + `?`
google = `*Mohon Tunggu Sebentar Ya Sayang...*`

  if (!text) throw goblok + gblk // Jika orangnya goblok

  if (text) {
                            m.reply(google)
  let res = await fetch(`https://api.zeks.xyz/api/ytplaymp3?apikey=Ze3af6X1SjJeUebhHUZCsHMeH13&q=` + text)
  let json = await res.json()
  let audio = MessageType.audio
  let data = json.result
      thumb = await (await fetch(data.thumbnail)).buffer()
      name = `ytmp3.jpg`
      header = `*Title*: ` + data.title
      content = `*Filesize:* ` + data.size
      contents = `*Duration:* ` + data.duration
      source = `*Source:* ` + data.source
      dl_link = `*Link:* ` + data.url_audio
      file = data.url_audio

 conn.sendFile(m.chat, thumb, name, header + `\n` + content + `\n` + contents + `\n` + source + `\n` + dl_link, m)

   await conn.sendFile(m.chat, file, audio, {
  quoted: m
                })
                                                   }
                   } catch (e) {
  throw e
   }
}
handler.command = /^(play|play(music|audio))$/i
handler.help = ['', 'music','audio'].map(v => 'play' + v + ' <link>')
handler.tags = ['downloader']

handler.prems = false
handler.register = true
handler.fail = null

handler.limit = 2

module.exports = handler

// Tomatt..