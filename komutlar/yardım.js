const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor(000000)
  .addField("**[1]Eğlence:**",`Eğlence komutlarını gösterir!` )
  .addField("**[2]Yetkili**",`Moderatör komutlarını gösterir!` )
  .addField("**[4]Ana Komutlar**",`Botun ana komutlarını listeler!` )
  .addField("**[5]Ekstra**",`Bota eklenmiş ekstra komutları gösterir!` )
  .setFooter("**𝓝𝓞𝓣: Ö𝓻𝓷𝓮𝓴: ..𝓮ğ𝓵𝓮𝓷𝓬𝓮**")
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
