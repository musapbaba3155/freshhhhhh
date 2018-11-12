const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Ana Komutlar")
  .setDescription('')
  .setColor(000000)
  .addField("**Botun Ana Komutları**", "..yardım = BOT Komutlarını Atar. \n..öneri = Öneri verirsiniz. \n..bilgi = BOT Kendisi Hakkında Bilgi Verir. \n..ping = BOT Gecikme Süresini Söyler. \n..davet = BOT Davet Linkini Atar. \n..istatistik = BOT İstatistiklerini Atar.")
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
  name: 'anakomutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'anakomutlar [komut]'
};
