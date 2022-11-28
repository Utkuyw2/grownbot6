let database = require("quick.db");

let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {

  if (!message.member.hasPermission(`ADMINISTRATOR`))

    return message.channel.send(

      `Bu Komutu Kullanmaya Yetkin Yetmiyor!`

    );

  let rol = message.mentions.roles.first();

  if (!rol)

    return message.channel.send(

      `<a:uptimes_no:816559013121490965> **__Bir Rol Etiketlemen Lazım Örnek Gösterim: ${ayarlar.prefix}abone-yetkili-rol @Rol__**`

    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);

  message.channel.send(

    `<a:ticks:816429255909965834> **Abone Yetkili Rolü "${rol}" Olarak Ayarlandı!**`

  );

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["abone-y-rol"],

  perm: 0

};

exports.help = {

  name: "abone-yetkili-rol"

};

exports.play = {

  kullanım: "y!abone-y-rol @rol",

  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",

  kategori: "Abone"

};
