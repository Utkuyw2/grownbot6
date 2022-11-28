let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:uptimes_no:816559013121490965> **Bu Komutu Kullanmaya Yetkin Yetmiyor**`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<a:uptimes_no:816559013121490965> **__Bir Kanal Etiketlemen Lazım Örnek Gösterim: ${ayarlar.prefix}abonelog #Kanal__**`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`<a:ticks:816429255909965834> **Abone Log Kanalı "${log}" Olarak Ayarlandı!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 'y!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}