const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(
          "Hata Yaptın!",
          `\`>embed-yaz\` **Kullanabilmek İçin** \`Yönetici\` **Yetkisine Sahip Olman Gerekiyor!**`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/818570409724477440/820731417059000340/IMG_20210314_215330.jpg"
        )
    );
  const Yazı = args.slice(0).join(" ");
  if (!Yazı)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Mesajı Yazmam İçin Bir Yazı Gir")
    );
  message.channel.send(
    new Discord.MessageEmbed().setColor("RANDOM").setDescription(Yazı)
  );

  message.delete();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["embed-yaz"],
  permLevel: 0
};
exports.help = {
  name: "embed-yaz",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "embed-yaz"
}