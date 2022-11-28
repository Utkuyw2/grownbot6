const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

    const jkood = new Discord.MessageEmbed()

             .setColor('RANDOM')

             .addField(`<a:dunya:820026247203127296> İşte Logo Komutlarım! <a:dunya:820026247203127296>`, `
             
**-------------------------------------------**             
<a:ates:739608060942614559> **${prefix}bubble**
**__Bubble Logo Atar.__**

<a:ates:739608060942614559> **${prefix}bubble2**
**__2. Bubble Logo Atar.__**

<a:ates:739608060942614559> **${prefix}discord**
**__Discord Logo Atar.__**

<a:ates:739608060942614559> **${prefix}comic**
**__Comic Logo Atar.__**

<a:ates:739608060942614559> **${prefix}basit**
**__Basit Logo Atar.__**

<a:ates:739608060942614559> **${prefix}cool**
**__Cool Logo Atar.__**

<a:ates:739608060942614559> **${prefix}gold**
**__Gold Logo Atar.__**

<a:ates:739608060942614559> **${prefix}alev**
**__Alevli Logo Atar.__**

<a:ates:739608060942614559> **${prefix}banner**
**__Banner Logo Atar.__**

<a:ates:739608060942614559> **${prefix}arrow**
**__Arrow Logo Atar__**
**-------------------------------------------**
**Linkler ; [Davet Et](https://discord.com/oauth2/authorize?client_id=761180377690931220&scope=bot&permissions=2147483647) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**

             `)
.setImage("https://cdn.discordapp.com/attachments/798495290729562122/799369696105201674/standard.gif")
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL())

            

        return message.channel.send(jkood);

}

exports.conf = {

	enabled : true,	guildOnly : false,

	aliases : ['logo-yardım'],

	permLevel : 0

}

exports.help = {

	name : 'logo-yardım',

	description : 'Komut kategorilerini atar',

	usage : '!logo-yardım'

}

//DÜZENLENECEK