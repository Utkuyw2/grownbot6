const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);
 let westrabotlistyetkilisi = db.fetch(`westrabotlistyetkilirol_${message.guild.id}`)
   if(!message.member.roles.cache.has(westrabotlistyetkilisi)) return message.channel.send(`<a:uptimes_no:816559013121490965> Bu Komutu Kullanabilmek İçin <@&${westrabotlistyetkilisi}> Adlı Role Sahip Olmalısın!`)
	let botisim = args[0]
  let sahip = args[1]
	let log = westralogkanal //  Bot Eklendi / Onaylandı / Rededildi Kanalı
	
	if (!botisim) return message.channel.send(`<a:uptimes_no:816559013121490965> Botun ID'sini Girmen Lazım!`).then(x => x.delete({timeout: 3000}))
  	if (!sahip) return message.channel.send(`<a:uptimes_no:816559013121490965> Bot Sahibinin ID'sini Yazmalısınız!`).then(x => x.delete({timeout: 3000}))
  message.delete()
   const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setFooter(`Grown BotList Sistemi`)
    .setTimestamp()
    .setDescription(`<a:ticks:816429255909965834> <@${sahip}> **Adlı Kişi <@${botisim}> Adlı Botuyla Onaylandı.\nOnaylayan Yetkili:** ${message.author}`)
		client.channels.cache.get(log).send(westrabumbeyyyy);
		message.channel.send(`<a:ticks:816429255909965834> <@${botisim}> **Adlı Bot Onayladınız!**`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botonayla"],
  permLevel: 0
};

exports.help = {
  name: 'bot-onayla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};