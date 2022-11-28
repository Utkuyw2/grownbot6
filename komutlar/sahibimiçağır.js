const Discord = require("discord.js");

const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {

   let devtr = args.slice(0).join(' ');

   

  if (!devtr) return message.reply(':jack_o_lantern: **__Sahibimi Çağırmam İçin Bir Sebep Gir!__**')

  if (devtr.length < 7) return message.channel.send(":point_right:**__Sebebiniz Daha Bilgilendirici Olması İçin En Az 7 Karakterli Olmalıdır!__**");

  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;

  message.channel.createInvite({maxAge: 0}).then(invite => {

    message.channel.send("✅ **| Sahibime Mesajını İlettim!**")

    let xfalcon = new Discord.MessageEmbed()

    .setColor('RANDOM')

    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)

    .setTitle('Biri Seni Yardım İçin Çağırdı!')

    .addField('Sebep:', `${devtr}`)

    .addField(`Sunucunun Davet Linki:`, `${invite}`)

    .setThumbnail(message.guild.iconURL())

    .setFooter('Grown Yapımcıyı Çağırma Sistemi');

    client.users.cache.get(ayarlar.sahip).send(xfalcon);

  });

}

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["yapımcıyı-çağır"],

  permLevel: 0

};

exports.help = {

  name: 'çağır',

  description: 'Yapımcıyı Sunucuya Çağırır.',

  usage: 'çağır'

};