let handler = m => m
handler.all = async function (m, { isBlocked }) {
	
 if (isBlocked) return
if (m.text.startsWith('P')) { 
this.reply(m.chat ,`Assalamuallaikum Atheis`.trim(), m)
} 

}
module.exports = handler