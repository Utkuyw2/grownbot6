const Discord = require('discord.js');


exports.run = async (client, message) => {

if (message.author.id == "624315339626512384" || message.author.id == "") {
  message.channel.send("Yeniden Başlatıyorum!").then(msg => {
    process.exit(0)
    });
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot', 
  description: '',
  usage: 'reboot'
};