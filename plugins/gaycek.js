let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.gay)}”`, m)
}
handler.help = ['gaylevel']
handler.tags = ['game']
handler.command = /^(gaylevel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.gay = [
'Gay Level : 4%\n\nVERY SAFE!',
'Gay Level : 7%\n\nStill Safe',
'Gay Level : 12%\n\nHow Safe',
'Gay Level : 22%\n\nAlmost Safe',
'Gay Level : 27%\n\nA little gay',
'Gay Level : 35%\n\nGay ¼',
'Gay Level : 41%\n\nAlready passed from Aman',
'Gay Level : 48%\n\nHalf gay',
'Gay Level : 56%\n\nYou're gay too',
'Gay Level : 64%\n\numayan gay',
'Gay Level : 71%\n\nHow awesome is your style',
'Gay Level : 1%\n\n99% YOU ARE NOT GAY!',
'Gay Level : 77%\n\nYou Can`t Be Wrong Again, you`re gay',
'Gay Level : 83%\n\nGuaranteed gay!',
'Gay Level : 89%\n\nSo Gay!',
'Gay Level : 94%\n\n WOEE REPENT,, GAY YOU ARE THROUGHOUT THE LIMIT!�Y~,',
'Gay Level : 100%\n\nYou`re the GAYEST PERSON EVER!!!',
'Gay Level : 100%\n\nYou`re the GAYEST PERSON EVER!!!',
'Gay Level : 100%\n\nYou`re the GAYEST PERSON EVER!!!',
'Gay Level : 100%\n\nYou`re the GAYEST PERSON EVER!!!',
]