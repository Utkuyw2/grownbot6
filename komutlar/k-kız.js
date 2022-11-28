const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Role Sahip Olmalısın`)
if(message.channel.id !== kanal) return message.channel.send(` Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin!`)
if (!kızrol) return message.channel.send(`Kayıt Sistemi Ayarlanmadığı İçin Kullanılamaz!`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`Kız Olarak Kayıt Edeceğin Kişiyi Etiketle!`)
let isim = args[1]
if (!isim) return message.channel.send(`İsim Belirt`)
let yaş = args[2]
if (!yaş) return message.channel.send(`Yaş Belirt`)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username}`)
.setColor(0x36393F)
.setDescription(`<a:ticks:816429255909965834> **Kız Olarak Kayıt Edilen Kullanıcı: ${member} \nKız Olarak Kayıt Eden Yetkili:** <@!${message.author.id}>`)
.addField(`<:renklist:816429476698390528> Kullanıcının İsmi:`, `**${isim}**`, true)
.addField(`<:kedipanda:816442448863428649> Kullanıcının Yaşı:`, `**${yaş}**`, true)
.setThumbnail(member.avatarURL)
.setFooter(``)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}