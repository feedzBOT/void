let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*puzzle/i.test(m.quoted.text)) return !0
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    if (!(id in conn.tebakkimia)) return m.reply('The matter has ended')
    if (m.quoted.id == conn.tebakkimia[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += conn.tebakkimia[id][2]
            m.reply(`*Correct!*\n+${conn.tebakkimia[id][2]} XP`)
            clearTimeout(conn.tebakkimia[id][3])
            delete conn.tebakkimia[id]
        } else if (m.text.toLowerCase().endsWith(json.name.split` `[1])) m.reply(`* A Little More!*`)
        else m.reply(`*Incorrect!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
