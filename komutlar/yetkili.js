const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili")
  .setDescription('')
  .setColor(000000)
  .addField("**Sunucu Yetkilisi Komutları**", `..ban = İstediğiniz Kişiyi Sunucudan Banlar. \n..kick  = İstediğiniz Kişiyi Sunucudan Atar. \n..unban = İstediğiniz Kişinin Yasağını Açar. \n..mute = İstediğiniz Kişiyi Susturur. \n..oylama = Oylama Açar. \n..duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili [komut]'
};