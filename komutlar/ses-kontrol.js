const dc = require("discord.js")

exports.run = async(client,message,args) => {
let kisi = message.mentions.members.first() || message.member
let ehe = kisi.voice.channel
console.log(ehe)
if(ehe) {
  message.channel.send(`<@${kisi.id}> Şuan \`${ehe.name}\` Adlı Ses Kanalında`)
  } else if(!ehe) {
message.channel.send("Şuan Bir Sesli Kanalda Değil")}
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kontrol"],
  permLevel: 0
};
exports.help = {
  name: "ses-kontrol",
  description: "x"
};