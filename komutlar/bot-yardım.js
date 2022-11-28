const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

    const jkood = new Discord.MessageEmbed()

             .setColor('RANDOM')

             .addField(`<a:dunya:820026247203127296> İşte Bot Komutlarım! <a:dunya:820026247203127296>`, `
             
**-------------------------------------------**             
<a:ates:739608060942614559> **${prefix}istatistik**
**__İstatistik Komutunu Gösterir.__**

<a:ates:739608060942614559> **${prefix}davet**
**__Botun Davet Linklerini Gösterir.__**

<a:ates:739608060942614559> **${prefix}oyver**
**__Oy Verebilirsiniz.__**

<a:ates:739608060942614559> **${prefix}ping**
**__Botun Pingini Gösterir.__**

<a:ates:739608060942614559> **${prefix}sosyal-medya**
**__Kurucumun Sosyal Medya Hesaplarını Gösterir.__**
**-------------------------------------------**
**Linkler; [Davet Et](https://bit.ly/2OEHqRx) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**

             `)
.setImage("https://cdn.discordapp.com/attachments/798495290729562122/799369696105201674/standard.gif")
    
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())

            

        return message.channel.send(jkood);

}

exports.conf = {

	enabled : true,	guildOnly : false,

	aliases : ['bot'],

	permLevel : 0

}

exports.help = {

	name : 'bot',

	description : 'Komut kategorilerini atar',

	usage : '!bot'

}

//DÜZENLENECEK