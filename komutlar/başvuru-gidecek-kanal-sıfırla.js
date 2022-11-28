const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu Komutu Kullanabilmek İçin **Sunucu Sahibi** Yetkisi Olmalıdır!')
  let prefix = ">"
 db.delete(`westrabasvurugidecekkanal_${message.guild.id}`);
  message.channel.send(`<a:ticks:816429255909965834> **Başvuru Onay Red Kanal Sıfırlandı!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'onay-red-kanal-sıfırla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};