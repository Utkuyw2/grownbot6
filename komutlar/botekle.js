const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {
  const DBL = require("dblapi.js");
  const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MTE4MDM3NzY5MDkzMTIyMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4NzUwMzY0fQ.W2mJq10pPlJr7p5Zc8y2VZ-v-zRqkKCYmPq3DruhRI8", client);
dbl.hasVoted(message.author.id).then(async voted => {
    if (voted) {
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = westrabasvurugidecekkanal
	let kanald = westrabasvuruyapılacakkanal 
  let log = westralogkanal 
	
  if (message.channel.id !== kanald) return message.channel.send(`Bu Komutu <#${kanald}> Kanalında Kullanabilirsin.`).then(x => x.delete({timeout: 10000}))
	if (message.channel.id == kanald) {
  if (!botid) return message.channel.send(`<a:uptimes_no:816559013121490965> Botunun ID'sini Yazmalısın.`).then(x => x.delete({timeout: 5000}))
  if (!prefix) return message.channel.send(`<a:uptimes_no:816559013121490965> Botunun Prefixini Yazmalısın.`).then(x => x.delete({timeout: 5000}))
  if (!onaylımı) return message.channel.send(`<a:uptimes_no:816559013121490965> Botunun DBL Onaylı Olup Olmadığını Yazmalısın.`).then(x => x.delete({timeout: 5000}))
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`**Yeni Bir Bot Başvurusu;**
**╭−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−**
**┊ -------------------------------------------------------**
**┊ Bot Sahibi:**   \`${message.author.tag}\`    ${message.author}   
**┊ -------------------------------------------------------**
**┊ Bot Sahibi ID:** \`${message.author.id}\`
**┊ -------------------------------------------------------**
**┊ Bot ID:** \`${botid}\`
**┊ -------------------------------------------------------**
**┊ Prefix:** \`${prefix}\`
**┊ -------------------------------------------------------**
**┊ Bot Onaylı Mı ?: ** \`${onaylımı}\`
**┊ -------------------------------------------------------**
**┊ Bot Davet Link:** **[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)**
**┊ -------------------------------------------------------**
**╰−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−** `)
  client.channels.cache.get(basvuru).send(embed)
    const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setFooter(`Grown BotList Sistemi`)
    .setTimestamp()
    .setDescription(`<:ohayou:820600447378653225> ${message.author} **Adlı Kullanıcı <@${botid}> Adlı Botuyla Yeni Bot İsteği Onaylanması Bekleniyor!**`)
  client.channels.cache.get(log).send(westrabumbeyyyy)
  message.channel.send(`<a:ticks:816429255909965834> **Bot Ekleme İsteğini Alındı!**`).then(x => x.delete({timeout: 5000}))
  }
  } else{
      const oyver = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg"}))
.setDescription("Bu Komutu Kullanabilmek İçin Bana [Oy Vermeniz Gerekmektedir](https://top.gg/bot/761180377690931220/vote)")
message.channel.send(oyver);
return;
}
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["add-bot","botekle","addbot"],
  permLevel: 0
};

exports.help = {
  name: 'bot-ekle', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};