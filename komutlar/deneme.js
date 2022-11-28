const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
          const DBL = require("dblapi.js");
  const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MTE4MDM3NzY5MDkzMTIyMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4NzUwMzY0fQ.W2mJq10pPlJr7p5Zc8y2VZ-v-zRqkKCYmPq3DruhRI8", client);
dbl.hasVoted(message.author.id).then(async voted => {
    if (voted) {

        const yardim = new Discord.MessageEmbed()

      


             .setColor('')
              .setTitle(``)
             .setAuthor(`Rezzy•Bot`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(` > Ekonomi Komutları`,`
             \`${prefix}günlük-para\` Günlük Paranı Alırsınız 
             \`${prefix}hesap-aç\` Banka Hesabı Açarsınız 
             \`${prefix}hesap\` Hesap Bilgilerini Gösterir 
             \`${prefix}hesap-sil\` Banka Hesabınızı Siler 
             \`${prefix}market\` Marketi Açar 
             \`${prefix}para\` Paranızı Gösterir 
             \`${prefix}profil\` Para Gönderirsiniz
             \`${prefix}slots\` Para Gönderirsiniz
             \`${prefix}soygun\` Para Gönderirsiniz
`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(yardim);
            } else{
      const oyver = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg"}))
.setDescription("Merhaba dostum!  [TIKLA](https://top.gg/bot/761180377690931220/vote) Likten botumuza oy vererek komutu kullanabilirsin! Bu zorunluluğu büyümemiz için koyduk, iyi günler.")
message.channel.send(oyver);
return;
}
})
};

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : [],
    permLevel : 0
}

exports.help = {
    name : 'yardım-2',
    usage : '-yardım-2'
}