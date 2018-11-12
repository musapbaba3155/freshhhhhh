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
    .setAuthor( 'Sakin ol evlad!')
    .setColor(000000)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://em.wattpad.com/9a579d663c32d0e2e4063149242f8041984d6eb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a76513751724f526a584b7378673d3d2d3538383334343038312e313533373833313666356135396233623835323737353234393133312e676966?s=fit&w=720&h=720`)
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
  name: 'uçurumdanatla',
  description: 'Çay İçer.',
  usage: 'uçurumdanatla'
};
