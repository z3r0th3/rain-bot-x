const Discord = require('discord.js');


exports.run = function(client, message) {
    let sicon = message.guild.iconURL
    const embed = new Discord.RichEmbed()
        .setColor("#00ff15")
		.addField("Sunucu İsmi", message.guild.name)
		.setThumbnail(sicon)
        .setDescription('Sunucu Hakkında')
		.addField("Tarihinde Yapılmış", message.guild.createdAt)
		.addField("Tarihinde Katıldın", message.member.joinedAt)
		.addField("Kişi Var", message.guild.memberCount);
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sunucu-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi', 
  description: 'Sunucu Hakkında Menüsü',
  usage: 'sunucu-bilgi'
};