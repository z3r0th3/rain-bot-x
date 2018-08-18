const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x000080)
        .setAuthor(message.author.tag)
        .setImage('https://media.giphy.com/media/ordLtY9K29ZMk/giphy.gif')
        .setDescription('Oooooooo!');
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['dab'],
  permLevel: 0
};

exports.help = {
  name: 'dab', 
  description: 'Dab Çekersiniz',
  usage: 'dab'
};