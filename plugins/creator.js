function handler(m) {
  this.sendContact(m.chat, '254707715807', 'KioniNdungu', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
