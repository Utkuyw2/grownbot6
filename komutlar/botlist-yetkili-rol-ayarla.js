const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu Komutu Kullanabilmek İçin **Sunucu Sahibi** Yetkisine Sahip Olmalısınız!')
  let prefix = ">"
  let rol = message.mentions.roles.first();   
    if (!rol) {
      message.channel.send(`Bir Rol Etiketle!`);
      return;
    }
 db.set(`westrabotlistyetkilirol_${message.guild.id}`, rol.id);
  message.channel.send(`<a:ticks:816429255909965834> **Botlist Yetkili Rolü ${rol} Olarak Ayarlandı!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-rol-ayarla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};