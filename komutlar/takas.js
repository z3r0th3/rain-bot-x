const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x000080)
        .setAuthor(message.author.tag)
        .setImage('https://i.gifer.com/7u4S.gif')
        .setDescription('Sana 1 📦 Kadar 💵 Takas Etti');
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['takas'],
  permLevel: 0
};

exports.help = {
  name: 'takas', 
  description: 'Para Takas Edersiniz',
  usage: 'takas'
};