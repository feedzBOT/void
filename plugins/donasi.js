let handler = async m => m.reply(`
╭─「Donation • Credit」
│ • Joseph Kioni Ndungu [254707715807]
│ • Joseph kioni Ndungu [254789888989]
╰────

╭─ 「Donation • Non-pulse」
│ • Gopay, Ovo, Fund [254707715807]
│ • Thanks for your donation. I appreciate.
╰────
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te)$/i

module.exports = handler
