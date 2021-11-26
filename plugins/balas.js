let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text }) => {
    conn.req = conn.req ? conn.req : {}
    if (!args || !text) return m.reply('number or text?')
    let lmfao = args[0]
    let bruh = (lmfao + '@s.whatsapp.net')
    let tex = args.slice(1).join(' ')
    let txt = conn.req[bruh].text ? conn.req[bruh].text : m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let _text = ('Request: *' + txt + '*\nreply: *' + tex + '*\n' + readMore + '\n*From Moderator*\nModerator: *' + (name.vnmae || name.notify || name.name) + '*')
    conn.reply(m.chat, 'Your message has been sent', m)
    conn.sendMessage(bruh, _text, MessageType.text)
    delete conn.req[bruh]
    
}
handler.help = ['reply'].map(v => v + ' [number] [text]')
handler.tags = ['owner']
handler.command = /^(comment|reply)/i

handler.mods = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
