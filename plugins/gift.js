let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Please enter your Random Code!`, m)
    if (args[0] == 'ANDYyYY' || args[0] == '4ndY' || args[0] == 'A4557knJQ1' || args[0] == 'ANDYGANS') {

        conn.reply(m.chat, '*CONGRATULATIONS!*\n\nYou have earned\nRp.Unlimited,-!\n\nTax -Rp.50.000,-', m)
    global.DATABASE._data.users[m.sender].exp += 99999999999999999999999999999999999
    } else {
        conn.reply(m.chat, `*INVALID RANDOM CODE!*\n\nPlease contact the owner to buy a valid random code by typing !buycode or get a free random code by contacting the owner!`, m)
    }
}
handler.help = ['random <code>']
handler.tags = ['gift']
handler.command = /^(random)$/i
handler.premium = false

handler.limit = false

module.exports = handler
