const Discord = require('discord.js');
const ytdl = require('ytdl-core');


exports.run = async (client, message, args, ops) => {

    if (!message.member.VoiceChannel) return message.reply("İlk önce müzik kanalına girmen gerek");

    if (!message.member.me.VoiceChannel) return message.channel.send("Üzgünüm, RainBotX zaten bağlı");

    if (!args[0]) return message.channel.send("İlk önce URL girmen lazım");

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send("İlk önce **valid** URL girmen lazım");

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voicechannel.join();

    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));

    message.channel.send(`Şimdi ${info.title} oynatılıyor`);

};

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['p,çal'], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'çal', 
    description: 'Müzik Çalar',
    usage: 'p ya da çal' 
  };
