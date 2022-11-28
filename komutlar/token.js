const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle(`** ${message.author.username} Al Sana Token**`)
  .setDescription('')
  .setColor('#FF7F00')
  .setImage("https://cdn.discordapp.com/attachments/814007932886450179/814573582822015006/1529868994_videoplayback_convert-video-online.com.gif")

  .setTimestamp()
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["token"],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'token',
  usage: 'token'
};