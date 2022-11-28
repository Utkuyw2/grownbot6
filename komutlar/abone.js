let Discord = require("discord.js");
let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let aboneyetkilisi = await database.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `<a:uptimes_no:816559013121490965> **__Abone Rolü Ayarlanmadan Abone Rolünü Veremem!__**`
    );
  if (!abonelog)
    return message.channel.send(
      `<a:uptimes_no:816559013121490965> **__Abone Log Ayarlanmadan Abone Rolünü Veremem!__**`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `<a:vumpushypee:805848458883760179 **__Abone Rolü Verecek Yetkili Rolü Ayarlanmamış!__**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `Bu Komutu Kullanacak Yetkin Yok!`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`Bir Üye Etiketle!`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`<a:tick_blue:815961091510108212> Abone Rol Verildi!`)
    .addField(
      `<a:slurp:820600713485746207> Abone Rolünü Veren Yetkili:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `<a:dans:816649053949132800> Abone Rolü Verilen Kullanıcı:`,
      `${user}`,
      true
    )
   .addField(
     `<a:HappyBunny:816557687936385077> Mesaj Linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
    .setColor(`RANDOM`)
    .setImage("https://cdn.discordapp.com/attachments/798495290729562122/799369696105201674/standard.gif")
    .setFooter(``);
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone"],
  perm: 0
};
exports.help = {
  name: "a"
};

exports.play = {
  kullanım: "!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};

//CodeWorld Yunus Emre