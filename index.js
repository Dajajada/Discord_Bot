const { Client, MessageEmbed } = require('discord.js');
require("dotenv").config();
const client = new Client();

const token=process.env.Bot;
client.on('ready',()=>{
    console.log(`El bot esta listo como ${client.user.tag}`);
    client.user.setStatus('online');

    console.log(client.user.presence.status);

   //const testChannel = client.channel.find(channel=> channel.name === 'test');

    //console.log(testChannel);
});





client.on('message',(message)=>{
    //Recibiendo el mensaje
    console.log(message.content);
    if(message.content==="ping"){
        message.reply("pong");
    }
    if(message.content==="hola"){

        message.channel.send(`Hello ${message.author}`);
    }
    if(message.content.includes('!code')){
            message.channel.send("Feliz de que estes codeando");
    };

    if(message.content==='!youtube'){
        message.channel.send("https://www.youtube.com/?hl=es&gl=ES");
        message.delete();
    }


    if(message.content === "embed"){
            message.delete();
            const embed=new MessageEmbed()
            .setTitle("Mensaje Embed de Pikachu")
            .setColor('RANDOM')
            .setDescription("Esto es una descripcion  y soy un pikachu")
            .setImage('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png')
            .setAuthor("Bot chulito");

            message.channel.send(embed);
            
    };

    
   
    if(message.content==="!clear"){
       
       async function limpia(){
        const fetched= await message.channel.fetch({limit:100})
         
        message.channel.bulkDelete(fetched);
        console.log("Mensajes eliminados");
        }
        limpia();
    };
});


client.login(token);