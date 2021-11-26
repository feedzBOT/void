// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `Enter New Name for me `
     try {
        await conn.updateProfileName(text)
        conn.reply(m.chat, 'Success in Renaming', m)
     } catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

module.exports = handler
