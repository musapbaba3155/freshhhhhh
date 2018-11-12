const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Ekstra")
  .setDescription('')
  .setColor(000000)
  .addField("**Ekstra Komutlar**", `..tvizle = Televizyon izlersin. \n..radiodinle  = Radio dinlersin. \n..saat = Saat gösterir. \n..yazıtura = YazıTura oynarsın. \n..arabasür = Araba sürersin. \n..uçurumdanatla = Uçurumdan atlarsın. \n..stresçarkı = Stres Çarkı döndürürsünüz! \n..hesapla = Sorduğunuz matematik sorusunu hesaplar! \n..yazıtura = Yazı Tura Atar! \n..şifre = Rastgele Şifre oluşturur!`)
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
  name: 'ekstra',
  description: 'Tüm komutları gösterir.',
  usage: 'ekstra [komut]'
};
