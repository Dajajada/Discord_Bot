
require("dotenv").config();
const { Client } = require('discord.js');
const fs= require('fs');
const client = new Client();


const token=process.env.MUSIC;


client.on('ready',()=>{
    console.log(`El bot esta listo como ${client.user.tag}`);
    client.user.setStatus('online');

    console.log(client.user.presence.status);

   //const testChannel = client.channel.find(channel=> channel.name === 'test');

    //console.log(testChannel);
});


client.on('message', async message => {
    // Join the same voice channel of the author of the message

   if (message.content ==="!onradio" && message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
       }

        if(message.content === "!offradio" ){
        const  connection = await message.member.voice.channel.leave();
        
    
         }
       message.delete();
   });
  
 

 



   client.login(token);