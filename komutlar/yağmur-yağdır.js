const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x000080)
        .setAuthor(message.author.tag)
        .setImage('https://78.media.tumblr.com/67a7835cade2df127939d0152a9a1b0f/tumblr_oflfns9Tvh1vab1tno1_500.gif')
        .setDescription('Büyük Bir Fırtınaya Girdin');
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['yağmur-yağdır'],
  permLevel: 0
};

exports.help = {
  name: 'yağmur-yağdır', 
  description: 'Yağmur Yağdırır',
  usage: 'yağmur-yağdır'
};