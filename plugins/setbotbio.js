// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `Enter Text For my New Bio`
     try {
        await conn.setStatus(text)
        conn.reply(m.chat, 'Success in Changing My Bio', m)
     } catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
