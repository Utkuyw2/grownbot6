const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu Komutu Kullanabilmek İçin **Sunucu Sahibi** Yetkisine Sahip Olmalısın!')
  let prefix = ">"
  let kanal = message.mentions.channels.first();
    if (!kanal) {
      message.channel.send(`Bir Kanal Etiketle!`);
      return;
    }
 db.set(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  message.channel.send(`<a:ticks:816429255909965834> **Başvuru Yapılacak Kanal ${kanal} Olarak Ayarlandı!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-kanal-ayarla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};