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
   if(!message.member.roles.cache.has(westrabotlistyetkilisi)) return message.channel.send(`<a:uptimes_no:816559013121490965> Bu Komutu Kullanabilmen İçin <@&${westrabotlistyetkilisi}> Adlı Role Sahip Olma Lazım!`)
	let botisim = args[0]
  let sahip = args[1]
  let zaman = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
	let log = westralogkanal 
	
	if (!botisim) return message.channel.send(`Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
    if (!sahip) return message.channel.send(`Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
   const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setFooter(`Grown BotList Sistemi`)
    .setTimestamp()
    .setDescription(`<a:uptimes_no:816559013121490965> <@${botisim}> **Adlı Bot Reddedildi!** <@${sahip}>`)
		client.channels.cache.get(log).send(westrabumbeyyyy);
		message.channel.send(`<a:uptimes_no:816559013121490965> **Bot Reddedildi!**`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-reddet","botreddett"],
  permLevel: 0
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};