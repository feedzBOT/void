let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'Iya', description: ";)", rowId:".ym"},
        {title: 'Aren`t you ugly', description: ";(", rowId:".yl"},
    ]
    
    const sections = [{title: "Please select", rows: rows}]
    const button = {
        buttonText: 'press this',
        description: "Do you love me?",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['hey'] 
handler.tags = ['hey']
handler.command = /^ai$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler