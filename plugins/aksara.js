let fetch = require('node-fetch') 

let handler = async (m, { conn, args, usedPrefix, command }) => { 
    let er = `Options available: 
• latinkejava 
• latinkesunda 
• javakelatin 
• sundakelatin Usage 

example: 
$ {usedPrefix + command} latinkejawa good morning 
    `.trim() 
    if (!args[0]) throw er 

    switch (args[0].toLowerCase()) { 
        case 'latinkejawa': 
        case 'latinkesunda': 
        case 'jawakelatin': 
        case 'sundakelatin': 
            let text = args.slice(1).join(' ') 
            let res = await fetch(global.API('xteam', '/aksara/' + args[0].toLowerCase(),{ text }, 'APIKEY'))
            if (res.status !== 200) throw await res.text() 
            if (!json.status) throw json 
            m.reply(json.message) 
            break 
        default: 
            throw er 
    } 
} 
handler.help = ['script'] .map(v => v + ' <options> <text>') 
handler.tags = ['tools'] 
handler.command = /^character$/i 

handler.limit = true 

module.exports = handler
