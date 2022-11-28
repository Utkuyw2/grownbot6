const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  

if(!message.member.permissions.has('MANAGE_MESSAGES'))
  return message.channel.send(
    
    new Discord.MessageEmbed()
    
    .setColor('RANDOM')
    
 .setTitle('**Bu Komudu Kullanabilmek İçin Mesajları Yönet Yetkisinine Sahip Olman Gerek!**'));
  
if(!args[0]) return message.channel.send(
  
  
  new Discord.MessageEmbed()
  
  .setColor('RANDOM')
  
  .setTitle('Bir Miktar Belirtiniz!'));
  
if(args[0] > 100) return message.channel.send(
  
  new Discord.MessageEmbed()
  
.setColor('RANDOM')
  
  .setTitle('100+ Mesaj Silemem!'));
  
message.channel.bulkDelete(args[0]);
  
return message.channel.send(
  
  new Discord.MessageEmbed()
  
  .setColor('RANDOM')
  
  .setDescription('**Başarılı Bir Şekilde \`\`\`'+`${args[0]}`+'\`\`\`\ Adet Mesaj Silindi!**')).then(m => m.delete({timeout: 8000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Sil','Delete','delete'],
  permLevel: 0
}

exports.help = {
  name: 'sil',
  description: 'Grown Sil Komutu',
  usage: '>sil'
};