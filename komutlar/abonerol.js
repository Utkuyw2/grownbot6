let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:uptimes_no:816559013121490965> **Bu Komutu Kullanmaya Yetkin Yetmiyor!**`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<a:uptimes_no:816559013121490965> **__Bir Rol Etiketlemen Lazım Örnek Gösterim:** ${ayarlar.prefix}abonerol @Rol__**`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`<a:ticks:816429255909965834> **Abone Rolü "${rol}" Olarak Ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: 'y!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}