const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async (app, message, client) => {

  

  const plasmic = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setDescription('**<a:loading2:820600711388987392> Ping Hesaplanıyor <a:loading2:820600711388987392>**')

  

   let plasmicc = Date.now(); 

   let plasmiccode = await message.channel.send(plasmic)

   let plasmiccodee = (Date.now() - plasmicc); 

   let plasmicAPI = (app.ws.ping).toFixed(2)

    setInterval(() => {

   const plasmiccc = new Discord.MessageEmbed()

   .setDescription(`\n **Mesaj Gecikme Süresi:** **${plasmiccodee}Ms** \n\n**Bot Gecikme Süresi:** **${plasmicAPI}Ms**`)

   .setColor('RANDOM')
   
   .setFooter(`${message.author.username} Tarafından Kullanıldı!`)

    plasmiccode.edit(plasmiccc);

    }, 5000)

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['ms'],

  permLevel: 0

};

exports.help = {

  name: 'ping',

  description: 'Ping komutu işte yaw',

  usage: 'ping'

};   //Plasmic Code・xKqntyZ_
