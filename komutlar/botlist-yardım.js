const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`<a:dunya:820026247203127296> İşte BotList Komutlarım! <a:dunya:820026247203127296>`,`
**-------------------------------------------**
<a:ates:739608060942614559> **${prefix}başvuru-kanal-ayarla/sıfırla #kanal**
**__Bot Ekleme Kanalını Ayarlar.__**\n
<a:ates:739608060942614559> **${prefix}bot-log-kanal-ayarla/sıfırla #kanal**
**__Bot Log Kanalını Ayarlar.__**\n
<a:ates:739608060942614559> **${prefix}botlist-yetkili-rol-ayarla/sıfırla @rol**
**__BotList Yetkili Ayarlar.__**\n
<a:ates:739608060942614559> **${prefix}onay-red-kanal-ayarla/sıfırla #kanal**
**__Onay Red Kanalını Ayarlar.__**\n
<a:ates:739608060942614559> **${prefix}bot-ekle <Bot İd> <Prefix> <Dbl Onay>**
**__Bot Ekler.__**\n
<a:ates:739608060942614559> **${prefix}bot-onayla <Bot İd> <Sahip İd>**
**__Botu Onaylar.__**\n
<a:ates:739608060942614559> **${prefix}bot-reddet <Bot İd> <Sahip İd>**
**__Botu Reddedersiniz!__**
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
  aliases: ["botlist-sistem"],
  permLevel: 0
};
exports.help = {
  name: "botlist-yardım",
  description: "Komut kategorilerini atar",
  usage: ">botlist-yardım"
};