let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Halo Kakk\nSaya Sakura さくら\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah Ini Yaa\n\nSpam = Banned\nTelp = Blok Cok!\n\n\n💌WhatsApp Me:\nhttp://wa.me/6285804289247\n\n📍Subscribe YouTube Me:\nhttps://youtube.com/channel/UCeakAqCEt_ztqc2rDhyS6Lg",
                        "description": "\n*JANGAN DI BULLY, AKU MASIH NUBB BANGG*\n\n*© Sakura さくら*",
                        "buttonText": "PILIH SALAH SATU COK",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nI Want To Use Download Menu",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nI Want To Use Button Menu",
                                        "rowId": ".menu3"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nI Want To Use All Menu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nI Want To Use Jadibot Menu",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nI Want To Use Owner Menu",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nI Want To Use Hentai Menu",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nI Want To Use Absen Menu",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nI Want To User Group Setting",
                                        "rowId": ".groupset"
                                    }, {    
                                        "title": "Primbon Menu",
                                        "description": "\nI Want To Use Peimbon Menu",
                                        "rowId": ".primbonmenu"
                                        
                                    }, {       
                                        "title": "Dewasa Menu",
                                        "description": "\nI Want To Use Dewasa Menu",
                                        "rowId": ".dewasamenu"
                                        
                                   }, {        
                                        "title": "Edukasi Menu",
                                        "description": "\nI Want To Use Edukasi",
                                        "rowId": ".educationmenu"
                                        
                                   }, {             
                                        "title": "Editod Menu",
                                        "description": "\nI Want To Use Editor Menu",
                                        "rowId": ".editormenu"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu','help']
handler.register = true
module.exports = handler