const Discord = require('discord.js');
const bot = new Discord.Client();
// const moment = require('moment');
const prefix = '!';

bot.on('ready', () => 
	 {bot.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')});
   
bot.on('message', msg => {	
  if (msg.content === 's.a.' |msg.content === 's.a' |msg.content === 's' |msg.content === 'selm' |msg.content === 'salam' |msg.content === 'slm' |msg.content === 'sa' | msg.content ==='Sa'|msg.content ==='selamlar'|msg.content ==='sea'|msg.content ==='Sea' | msg.content ==='selam' | msg.content ==='Selamlar' | msg.content ==='Selam'){
    msg.reply('Aleyküm Selam Hoş Geldin');
  }
});

bot.login(process.env.BOT_TOKEN);
