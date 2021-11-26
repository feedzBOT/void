let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.judi = conn.judi ? conn.judi : {}
    if (m.chat in conn.judi) return m.reply ('There are still gambling here, wait until it is over!!')
    else conn.judi[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Let's be hard to win :v
        let I = (randomaku * 1)
        let You = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'gambling <amount>\n ' + usedPrefix + 'gambling 1000', m)
        if (global.DATABASE._data.users[m.sender].money >= count * 1) {
            global.DATABASE._data.users[m.sender].money -= count * 1
            await m.reply('*Do not gamble, you wont win !!, if you dont believe gpp*') // Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `I roll:${I}\nYou roll: ${You}\n\nyou *Lose*, you lose ${count} Money`.trim(), m)
            } else if (I < You) {
                global.DATABASE._data.users[m.sender].money += count * 2
                conn.reply(m.chat, `i roll:${I}\nYou roll: ${You}\n\nyou *Win*, you Get ${count * 2} Money`.trim(), m)
            } else {
                global.DATABASE._data.users[m.sender].money += count * 1
                conn.reply(m.chat, `I roll:${I}\nYou roll: ${You}\n\nyou *Draw*, you Get ${count * 1} Money`.trim(), m)
            }
        } else conn.reply(m.chat, `Your money is not enough to gamble as big as${count} Money`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Judi.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.judi[m.chat]
    }
}
    
handler.help = ['gambling <amount>']
handler.tags = ['rpg']
handler.command = /^(gambling)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
