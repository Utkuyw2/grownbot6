const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  //'Vu4ll#0586

  const emojiadi = args.join(" ");

  if (emojiadi.length < 1) return message.reply("Emoji İsmi Yazmalısın!");

  const arananemoji = message.guild.emojis.cache.find(a => a.name == emojiadi);

  if (arananemoji === null || !arananemoji)

    return message.reply("Böyle Bir Emoji Bulamadım Başka Bir Tane Seç!");

  if (arananemoji.animated === true) {

    message.channel

      .createWebhook(message.author.username, {

        avatar: message.author.avatarURL({ format: "png" })

      })

      .then(webhook => {

        setTimeout(m => {

          webhook.send(`<a:${emojiadi}:${arananemoji.id}>`);

          let wb = new Discord.WebhookClient(webhook.id, webhook.token);

          wb.delete();

          message.delete();

        }, 500);

      });

  } else {

    message.channel

      .createWebhook(message.author.username, {

        avatar: message.author.avatarURL({ format: "png" })

      })

      .then(webhook => {

        setTimeout(m => {

          webhook.send(`<a:${emojiadi}:${arananemoji.id}>`);

          let wb = new Discord.WebhookClient(webhook.id, webhook.token);

          wb.delete();

          message.delete();

        }, 500);

      });

  }

};

exports.conf = {

  aliases: ["emojiat"]

};

exports.help = {

  name: "emoji-at",

  description: "Belirtilen emojiyi atar.",

  usage: "emoji <emoji ismi>",

  perm: 1

};

