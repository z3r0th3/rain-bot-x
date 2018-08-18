const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = 'ayarlar.prefix';

client.on('ready', () => {
  console.log(`${client.user.tag} geldi!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!' + client.ping + 'ms!');
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('**Aleyküm Selam Knk!**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'yağmur-yağdır') {
    msg.reply('**Dikkat Et Şimşek Geliyor!⚡☔**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'kalın-yaz') {
    msg.channel.send('**Kalın Gibi Yazıldı**');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'coder-yaz') {
    msg.channel.send('``Coder Gibi Yazıldı``');
  }
});
client.login('ayarlar.token');