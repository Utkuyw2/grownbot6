const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = (client, message, args) => {

let mention = message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});

let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};
let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', ' <:rozet2:828013680616538152>')
.replace('HOUSE_BRILLIANCE', ' <:rozet1:828013387358404609>')
.replace('HOUSE_BALANCE', ' <:rozet3:828013968609771520>')
.replace('VERIFIED_DEVELOPER', ' <:rozet9:828019302111510530>')
.replace('DISCORD_EMPLOYEE', ' <:rozet12:828188276908752917>')
.replace('PARTNERED_SERVER_OWNER', ' <:rozet4:828014294876028938>')
.replace('HYPESQUAD_EVENTS', ' <:rozet5:828014737664245801>')
.replace('BUGHUNTER_LEVEL_1', ' <:rozet6:828014991960440853>')
.replace('EARLY_SUPPORTER', ' <:rozet7:828016968984559666>')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', '<:rozet10:828019858163630111>')
.replace('VERIFIED_BOT', '<:rozet8:828017650105057300>');
let sa;
if(mention.bot) {
sa = 'Bilinmiyor.'
} else {
};
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail(mention.avatarURL({dynamic: true}))
.addField('<a:sag:827969475281813544> **Kullanıcı İsmi:**', mention.tag, true)
.addField('<a:sag:827969475281813544> **Kullanıcı ID:**', mention.id, true)
.addField('<a:sag:827969475281813544> **Kullanıcı Rozetleri:**', `${rozetler ? mentionFlags : 'Hiç yok.'}`, true)
.addField('<a:sag:827969475281813544> **Discorda Kaydolma Tarihi:**', moment(mention.createdAt).format('D MMMM YYYY'), true)
.addField('<a:sag:827969475281813544> **Sunucuya Katılma Tarihi:**', moment(mentionMember.joinedAt).format('D MMMM YYYY'), true)
.addField('<a:sag:827969475281813544> **Kullanıcının Rolleri:**', mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Hiç yok.', true)

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil', 'p'],
  permLevel: 0
};
 
exports.help = {
  name: 'kullanıcı-bilgi'
};