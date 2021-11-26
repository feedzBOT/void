let fetch = require('node-fetch') 

const api_name = [ 
  ['xteam', '/primbon/artiname', 'q', 'APIKEY', json => { 
    if (!json.status) throw json 
    return ` 
*Name:* ${json.result.name} 
*Meaning:* ${json.result.meaning} 

*Meaning:* ${json.result.intent} 
`.trim() 
  }], 
  ['http:// nzcha-apii.herokuapp.com', '/meaningname', 'name', null, json => { 
    if (!json.status) throw json 
    return ` 
*Meaning:* ${json.result} 
`.trim() 
  }], 
  ['https://scrap.terhambar.com', '/name', 'n', null, json => { 
    if (!json.status) throw json 
    return ` 
*Meaning:* ${json.result.meaning} 
`.trim() 
  }] 
]

let handler = async (m, { text }) => { 
  if (!text) throw 'What is his/her name?' 
  let result = '' 
  for (let [origin, pathname, query, apikey, fn] of artiname_api) { 
    try { 
      let res = await fetch(global.API(origin, pathname, { [query]: text }, apikey)) 
      if (!res.ok) throw res.text() 
      let json = await res.json() 
      result = await fn(json) 
      break 
    } catch (e) { 
      lastErr = e 
    } 
  } 
  m.reply(result) 
} 
handler. help = ['meaningname'].map(v => v + ' [name]') 
handler.tags = ['shell'] 
handler.command = ['meaning'] 

module.exports = handler
