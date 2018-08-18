const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x000080)
        .setAuthor(message.author.tag)
        .setImage('https://media1.tenor.com/images/018781d6ac1cfce56a8f7ca763d77090/tenor.gif?itemid=3558279')
        .setDescription('Ben 💵 Yağdırıyorum.ZENGİN OLDUK!');
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['para-yağdır','paralar'],
  permLevel: 0
};

exports.help = {
  name: 'para-yağdır', 
  description: 'Zengin Olursunuz',
  usage: 'para-yağdır'
};