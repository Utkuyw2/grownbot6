const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`<a:dunya:820026247203127296> İşte Moderasyon Komutlarım! <a:dunya:820026247203127296>`,`
**-------------------------------------------**
<a:ates:739608060942614559> **${prefix}modlog #kanal**
**__Modlog Ayarlanır.__**\n
<a:ates:739608060942614559> **${prefix}modlog kapat**
**__Modlog Kapatır!__**\n
<a:ates:739608060942614559> **${prefix}sa-as aç/kapat**
**__Sa As Açar Kapatır.__**\n
<a:ates:739608060942614559> **${prefix}kurallar**
**__Kurallar Atar.__**\n
<a:ates:739608060942614559> **${prefix}küfür-engel aç/kapat**
**__Küfür Engel Açıp Kapatır.__**\n
<a:ates:739608060942614559> **${prefix}nuke**
**__Kanala Nuke Atar.__**\n
<a:ates:739608060942614559> **${prefix}link-engel aç/kapat**
**__Link Engel Açıp Kapatır.__**\n
<a:ates:739608060942614559> **${prefix}sil**
**__0-100 Mesaj Siler.__**\n
<a:ates:739608060942614559> **${prefix}emoji-ekle**
**__Sunucuya Emoji Ekler.__**
**-------------------------------------------**\n**Linkler ; [Davet Et](https://discord.com/oauth2/authorize?client_id=761180377690931220&scope=bot&permissions=2147483647) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**
             `
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/798495290729562122/799369696105201674/standard.gif"
    )
    .setFooter(`${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL()
    );
  return message.channel.send(jkood);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};
exports.help = {
  name: "moderasyon",
  description: "Komut kategorilerini atar",
  usage: "!moderasyon"
};