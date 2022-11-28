const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

const db = require('quick.db')

module.exports = async message => {

  let client = message.client;

  let prefix = ayarlar.prefix

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0].slice(prefix.length);

  let params = message.content.split(' ').slice(1);

  let perms = client.elevation(message);

  let cmd;

  if (client.commands.has(command)) {

    cmd = client.commands.get(command);

  } else if (client.aliases.has(command)) {

    cmd = client.commands.get(client.aliases.get(command));

  }

  if (cmd) {

    let bakım = await db.fetch("bakım");

    if (message.author.id !== ayarlar.sahip) {

 if (bakım) {

        return message.channel.send(

          new Discord.MessageEmbed()

          .setColor('RANDOM')

          .setTimestamp()

          .setAuthor("Grown Bakım!", "https://cdn.discordapp.com/avatars/761180377690931220/012ec859de9934ce49be31d4af979f8b.webp?size=1024")

          .setThumbnail(message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))

          .setDescription(`

> **<:Totem:787934105693061130>** **Size Daha İyi Hizmet Sunmak İçin Bakıma Giriyoruz!**

> 

> **<:Hmm:787934105345589288>** ** __Bakım Sebebimiz__: \`${bakım}\`**

`));

      }

    }

    if (perms < cmd.conf.permLevel) return;

    cmd.run(client, message, params, perms);

  }

};
