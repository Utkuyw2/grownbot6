const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle("Sosyal Medyalarım!")

  .setDescription("**<a:grown_instagram:817299728407724072> aloyshagg\n<a:grown_twitter:817298351488761877> aloyshagg\n<a:grown_twitch:817298317405978654> aloyshagg\n<a:grown_youtube:817303966970544138> [TIKLA](https://youtube.com/channel/UCgrvx_Pn8jeOXjCE-2GvxKw)\n<a:grown_discord:817298336788381716> aloysha#3805**")

  message.channel.send(davet)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'sosyal-medya',

  description: '',

  usage: ''

};