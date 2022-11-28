const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip Olman Lazım!`)
if(message.channel.id !== kanal) return message.channel.send(` Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin!`)
if (!erkekrol) return message.channel.send(`Kayıt Sistemi Ayarlanmadığı İçin Çalışmaz!`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`Bir Kişiyi Etiketlemen Lazım!`)
let isim = args[1]
if (!isim) return message.channel.send(`İsim Belirtiniz!`)
let yaş = args[2]
if (!yaş) return message.channel.send(`Yaş Belirtiniz!`)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username}`)
.setColor(0x36393F)
.setDescription(`<a:ticks:816429255909965834> **Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n<:yes:820026240411893800> Kayıt Eden Yetkili:** <@!${message.author.id}>`)
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
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: 'dr!erkek @kullanıcı isim yaş'
}