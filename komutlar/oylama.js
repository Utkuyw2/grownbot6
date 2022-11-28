const Discord = require('discord.js');
 exports.run = (client, message, args) => {
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.channel.send(
     new Discord.MessageEmbed()
     .addField(`:radioactive: **Bir Şey Yazman Gerek!** :radioactive:  `)).then(m => m.delete(5000));
     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.")
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('Grown | Oylama Sistemi', client.user.displayAvatarURL())
       .addField(`****`, `**${question}**`)).then(function(message) {
         message.react('<a:ticks:816429255909965834>');
         message.react('<a:uptimes_no:816559013121490965>');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],
  permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};