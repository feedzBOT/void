let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `example:\n${usedPrefix + command} 1 2\n\nthen the result is Surah Al-Fatihah verse 2 along with the audio, and the verse is 1 only`

    let res = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], verse: args[1] } ))
    let json = await res.json()
    let mes = `${json.result.data.text.arab}
    
${json.result.data.translation.id}

( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, json.result.data.audio.primary, 'all.mp3', '', m, false, { mimetype: 'audio/mp4' })
}

handler.help = ['Quran *114 1*']
handler.tags = ['quran']
handler.command = /^(al)?quran$/i
module.exports = handler
