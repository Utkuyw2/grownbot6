const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply("**YETERSİZ YETKİ!**");
  let csc = message.mentions.channels.first();
  if (!csc) return message.reply("**Bir Kanal Etiketlemen Gerek!**");
  let csm = args.slice(1).join(" ");
  if (!csm) return message.reply("**Ne Duyurusu Yapılacak Yazman Gerek!**");
  let cse = new Discord.MessageEmbed()
    .setTitle("Hey Millet Duyuru Var!")
    .setThumbnail(message.guild.iconURL())
    .setColor("RANDOM")
    .setDescription(`\`${csm}\``)
    .setTimestamp()
    .setFooter("Grown Duyuru");
  csc.send(cse);
  setTimeout(() => {
    csc.send("").then(csmm => {
      csmm.delete({timeout: 20000});
    });
  }, 2000);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["duyur"],
    permLevel: 0
};

exports.help = {
    name: 'duyuru',
    description: '',
    usage: ''
}