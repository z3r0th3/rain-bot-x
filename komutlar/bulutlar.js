const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x000080)
        .setAuthor(message.author.tag)
        .setImage('https://media2.giphy.com/media/qq5gwamAHVofm/giphy.gif')
        .setDescription('Bulutlara bak!');
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['bulutlar','bulut'],
  permLevel: 0
};

exports.help = {
  name: 'bulutlar', 
  description: 'Bulutlara Doğru Gidersiniz',
  usage: 'bulutlar'
};