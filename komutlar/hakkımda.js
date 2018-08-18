const Discord = require('discord.js');


exports.run = function(client, message) {
    let cicon = client.user.displayAvatarURL
    const embed = new Discord.RichEmbed()
        .setColor("#00ff15")
		.addField("Bot'un İsmi", client.user.username)
		.setThumbnail(cicon)
        .setDescription('Hakkımda')
		.addField("Tarihinde Yapıldım", client.user.createdAt);
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['hakkımda'],
  permLevel: 0
};

exports.help = {
  name: 'hakkımda', 
  description: 'Bot Hakkında Menüsü',
  usage: 'hakkımda'
};