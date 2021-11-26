let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'virus spam service', description: "cek", rowId:".jsv"},
        {title: 'sales service number +254', description: "cek", rowId:".jjn"},
        
    ]
    
    const sections = [{title: "Please choose", rows: rows}]
    const button = {
        buttonText: 'press this',
        description: "just share",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['store'] 
handler.tags = ['store']
handler.command = /^store|tkk$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler