const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor (' Sonra ki şarkı benim!')
    .setColor(000000)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCleinjMsccgeLQ-kuLwWLy7E0GPlXV_5ccbs7m-1UhnXZVEOy`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radiodinle',
  description: 'Çay İçer.',
  usage: 'radiodinle'
};
