const Discord = require('discord.js');
 
 
 
const mapping = {
 
    ' ': '   ',
 
    '0': ':zero:',
 
    '1': ':one:',
 
    '2': ':two:',
 
    '3': ':three:',
 
    '4': ':four:',
 
    '5': ':five:',
 
    '6': ':six:',
 
    '7': ':seven:',
 
    '8': ':eight:',
 
    '9': ':nine:',
 
    '!': ':grey_exclamation:',
 
    '?': ':grey_question:',
 
    '#': ':hash:',
 
    '*': '*️⃣'
 
};
 
 
 
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
 
        mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
 
});
 
 
 
 
 
exports.run = function(client, message, args) {
  const DBL = require("dblapi.js");
  const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MTE4MDM3NzY5MDkzMTIyMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4NzUwMzY0fQ.W2mJq10pPlJr7p5Zc8y2VZ-v-zRqkKCYmPq3DruhRI8", client);
dbl.hasVoted(message.author.id).then(async voted => {
    if (voted) {

 
 
 
        if (args.length < 1) return message.reply('Lütfen bir mesaj belirt. **Doğru Kullanım**: ?emojiyazı <mesaj>')
 
               
 
        message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));

} else {
      const oyver = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true,format: "gif",format: "png",format: "jpg"}))
.setColor("RANDOM")
.setDescription("Merhabalar Bu Komutu Kullananilmek İçin [Buraya Tıklayarak](https://top.gg/bot/761180377690931220/vote) Linkten Botumuza Oy Vereerek Komutu Kullanabilirsin!")
message.channel.send(oyver);
return;
}
})
};
 
 
 
exports.conf = {
 
  enabled: true,
 
  guildOnly: true,
 
  aliases: [],
 
  permLevel: 0
 
};
 
 
 
exports.help = {
 
  name: 'emojiyazı',
 
  description: 'Mesajınızı emoji haline getirir',
 
  usage: 'emojiyazı <mesaj>'
 
};
