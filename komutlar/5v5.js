const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x000080)
        .setAuthor(message.author.tag)
        .setImage('https://media.giphy.com/media/zh5d05DyxniXm/giphy.gif')
        .setDescription('Savaşa girdin');
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['saldır','5v5'],
  permLevel: 0
};

exports.help = {
  name: '5v5', 
  description: 'Saldırıya Katılırsınız',
  usage: '5v5'
};