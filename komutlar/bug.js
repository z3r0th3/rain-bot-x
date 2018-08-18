const Discord = require('discord.js');
const hook = new Discord.WebhookClient('477509029971886080', '0J46HPXGsfICi9cgKm-24bGnKKHsA6otfJFWkvQYGgNObW5eGgyYWr88roBq5AuSYRWE');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Bana Bug Bildireceksin');
  message.delete();
  hook.send('**' + message.author.username + '** **#' + message.author.discriminator + '** Bana Hata Bildirdi. **Hata İse** -> ' + '**' + mesaj + '**');
  message.reply('Bana Hata Bildirdiğin İçin Teşekkürler')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bug','hata-bildir'],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Bug\Hata Bildirir',
  usage: 'bug'
};