let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let name = conn.getName(m.sender)
  let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `á´ÉªÉª, *${name}* Êá´á´ á´Êá´ É´á´á´ Êá´É¢Éªê±á´á´Êá´á´ ð\n\ná´Êá´á´ê±á´ Êá´É¢Éªê±á´á´Ê á´á´ á´ê±á´\nð á´á´ Êá´É¢Éªê±á´á´Ê, á´Êá´á´ *!Êá´É¢ É´á´á´á´|á´É¢á´*\n\nð¯ á´xá´á´á´Êá´ :\n!Êá´É¢ á´ÊÊÉªÉ´á´á´ |22`

  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'detect':
      chat.detect = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'antidelete':
      chat.delete = !isEnable
      break
    case 'autodelvn':
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    default:
      return conn.reply(`
â¨ï¸ ÊÉªê±á´ á´á´á´Éªá´É´: á´¡á´Êá´á´á´á´ | á´á´Êá´á´á´ | á´á´ÊÊÉªá´ | á´É´á´ÉªÊÉªÉ´á´ | á´á´á´á´Êá´á´ á´Êá´á´ | á´á´á´á´á´á´ | á´á´á´á´á´á´É´á´
ð¬ á´xá´á´á´Êá´:
${usedPrefix}á´É´ á´¡á´Êá´á´á´á´
${usedPrefix}á´ê°ê° á´¡á´Êá´á´á´á´
`.trim())
  }
  conn.reply(`
âï¸ *${type}* ê±á´á´á´á´ê±ê±ê°á´Ê ÉªÉ´ *${isEnable ? 'á´á´ÊÉ´ÉªÉ´É¢ á´É´' : 'á´á´ÊÉ´ÉªÉ´É¢ á´ê°ê°'}ÊÉªÉ¢Êá´* ${isAll ? 'ê°á´Ê á´ÊÉªê± Êá´á´' : isUser ? '' : 'ê°á´Ê á´ÊÉªê± á´Êá´á´'}
`.trim())
}
handler.help = ['on', 'off'].map(v => v + '<option>')
handler.tags = ['group', 'owner']
handler.command = /^((off|on)|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
