let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('Bot')) { 
this.reply(m.chat ,`*Halo Kak, Saya BOT Sakura さくら*\n*Apakah Ada Yang Bisa Saya Bantu?? Bisa Juga Ketik* _#menu_\n\n\n*[❗]JANGAN SPAM BOT*\n\n\n\*Whatsapp Owner:* \nhttps://wa.me/6285804289247`.trim(), m)
} 

}
module.exports = handler