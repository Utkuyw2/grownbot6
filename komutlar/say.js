const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let prefix = ayarlar.prefix 

exports.run = async(client, message, args) => {

const say = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Say Sistemi`) 
.setDescription(`**__Sunucudaki Toplam Kullanıcı Sayısı__**: **${message.guild.memberCount}**`)
.setColor('RANDOM')
.setFooter(`${message.author.username} Tarafından Kullanıldı.`)
.setTimestamp() 
message.channel.send(say)
}

exports.conf = {
enabled: true, 
guildOnly: true, 
aliases: [''],
permLevel: 0 
}

exports.help = {
name: 'say', 
}