let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `
GET US AND CANADA OTP NUMBER

Ksh100 / 1
Ksh200 Get 3 numbers

PAYMENT ONLY PULSE
Mpesa - 254707715807
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*type .otp if you are interested*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['.otp']
handler.command = /^(otp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
