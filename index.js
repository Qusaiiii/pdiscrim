const Discord = require('discord.js')
const client = new Discord.Client();
const prefix=  '!';



client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let tag;
  if(args[0] === `${prefix}discrim`) {
    if(args[1]) {
      let discrim = Array.from(args[1]);
      if(isNaN(args[1])) return message.channel.send(`- \`${message.author.username}\`, يجب ان تتكون هذه الخانة من ارقام وليس احرف`);
      if(discrim.length !== 4) return message.channel.send(`- \`${message.author.username}\`, يجب ان يكون التاق مكون من 4 ارقام`);

      tag = discrim.map(r => r.toString()).join('');
      console.log(tag);
      if(client.users.filter(f => f.discriminator === tag).size === 0) return message.channel.send(`- \`${message.author.username}\`, لا يوجد احد بهذا التاق`);
      let iLD = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(client.users.filter(f => f.discriminator === tag).map(r => r.username).slice(0, 10).join('\n'))
      .setFooter('Peery');
      message.channel.send(iLD);
    } else if(!args[1]) {
      tag = message.author.discriminator;
      if(client.users.filter(f => f.discriminator === tag).size === 0) return message.channel.send(`- \`${message.author.username}\`, لا يوجد احد بهذا التاق`);
      let L4U = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(client.users.filter(f => f.discriminator === tag).map(r => r.username).slice(0, 10).join('\n'))
      .setFooter('Peery');
      message.channel.send(L4U);
    }
  }
});



client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "324672376455299074") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN); 
