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
    .setAuthor( 'Sana yavaşla demiştim!')
    .setColor(000000)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://66.media.tumblr.com/8ac3d6dee00e09f11b4bd61f6b262274/tumblr_p4idq31Db01wvrf4mo1_500.gif`)
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
  name: 'arabasür',
  description: 'Çay İçer.',
  usage: 'arabasür'
};
