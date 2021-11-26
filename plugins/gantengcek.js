let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.ganteng)}”`, m)
}
handler.help = ['hardsomelevel']
handler.tags = ['game']
handler.command = /^(hardsomelevel)$/i
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

global.ganteng = [
'Handsome Level : 4%\n\nIs THIS FACE OR GARBAGE?!',
'Handsome Level : 7%\n\nSeriously bro, you almost look like a monkey!',
'Handsome Level : 12%\n\nThe longer I look at your face the more I vomit!',
'Handsome Level : 22%\n\nMaybe because you often see immorality',
'Handsome Level: 27%\n\nIt`s going to be hard to find your soul mate, just pray',
'Handsome Level : 35%\n\nBe patient, dear',
'Handsome Level : 41%\n\nGood luck getting a mate',
'Handsome Level : 48%\n\nGuaranteed girls are hard to approach you',
'Handsome Level : 56%\n\nYou are Half Handsome :v',
'Handsome Level : 64%\n\nEnough',
'Handsome Level : 71%\n\nYou`re pretty handsome too',
'Handsome Level : 1%\n\nAWOOAKAK BURIQQQ!!!',
'Handsome Level : 1%\n\nAWOOAKAK BURIQQQ!!!',
'Handsome Level : 1%\n\nAWOOAKAK BURIQQQ!!!',
'Handsome Level : 1%\n\nAWOOAKAK BURIQQQ!!!',
'Handsome Level : 77%\n\nNo More Wrong, Om',
'Handsome Level : 83%\n\nGuaranteed Girls won`t be disappointed Om',
'Handsome Level : 89%\n\nGirls will definitely faint when they see you!',
'Handsome Level : 94%\n\nAARRGGHHH!!!',
'Handsome Level : 100%\n\nYOU ARE THE HANDEST GUY I`VE EVER SEE!!!',
]