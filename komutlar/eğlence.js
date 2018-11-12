const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence")
  .setDescription('')
  .setColor(000000)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `..banned = Dene ve Gör! \..emojiyazı = Yazınızı emojiye dönüştürür! \n..avatarım = Avatarınınızı Gösterir. \n..herkesebendençay = Herkese Çay Alırsınız. \n..koş = Koşarsınız.\n..çayiç = Çay İçersiniz. \n..çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n..çayaşekerat = Çaya Şeker Atarsınız. \n..yumrukat = Yumruk Atarsınız. \n..yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n..sunucuresmi = BOT Sunucunun Resmini Atar. \n..sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n..kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n..slots = Slots çevirirsiniz! `)
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence [komut]'
};
