// import { Client, GatewayIntentBits } from 'discord.js';

const {Client , GatewayIntentBits} = require("discord.js");

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds ,GatewayIntentBits.GuildMessages ,GatewayIntentBits.MessageContent ] 
});

client.on('messageCreate', message=>{
    
    // console.log(message.content);
    if(message.author.bot) return;

    // if(message.content.startsWith("crm")){
    if(message.content == "crm down" || message.content == "CRM DOWN" ){
        return message.reply({
            content: "Please provide a tab link and wait for a sec",
        });
    }
    if(message.content == "Thank You" || message.content == "THANK YOU" || message.content == "thank you"  ){
        return message.reply({
            content: "You're welcome",
        });
    }
    if(message.content == "hi" || message.content == "hello" || message.content == "Hi"){
        return message.reply({
            content: "Hello from Bot",
        });
    }

    if (message.content.toLowerCase() == "good morning") {
        return message.reply({
            content: "Good morning! How can I assist you today?",
        });
    }
    if (message.content.toLowerCase() == "good afternoon") {
        return message.reply({
            content: "Good Afternoon! How can I assist you today?",
        });
    }
    if (message.content.toLowerCase() == "good night") {
        return message.reply({
            content: "Good night! Have a great rest!",
        });
    }
    if (message.content.toLowerCase() == "how are you") {
        return message.reply({
            content: "I'm just a bot, but I'm here to help! How can I assist you today?",
        });
    }
    if (message.content.toLowerCase() == "what's your name") {
        return message.reply({
            content: "I'm your friendly bot here to assist you!",
        });
    }
    if (message.content.toLowerCase() == "help") {
        return message.reply({
            content: "Sure, I'm here to help. Please specify your issue or query.",
        });
    }
    if (message.content.toLowerCase() == "what can you do") {
        return message.reply({
            content: "I can assist with various tasks and provide information. Just ask!",
        });
    }
    if (message.content.toLowerCase() == "bye" || message.content.toLowerCase() == "goodbye") {
        return message.reply({
            content: "Goodbye! Have a great day!",
        });
    }
    if (message.content.toLowerCase() == "what is your purpose") {
        return message.reply({
            content: "My purpose is to assist and provide information as needed.",
        });
    }
    if (message.content.toLowerCase() == "tell me a joke") {
        return message.reply({
            content: "Why don't scientists trust atoms? Because they make up everything!",
        });
    }
    if (message.content.toLowerCase() == "who am i") {
        return message.reply({
            content: "aama bahen pe nhi ja sakta nhi to bata deta",
        });
    }
    if (message.content.toLowerCase() == "what is today's date") {
        return message.reply({
            content: `Today's date is ${new Date().toLocaleDateString()}.`,
        });
    }
    if (message.content.toLowerCase() == "what time is it" || message.content.toLowerCase() == "current time") {
        return message.reply({
            content: `The current time is ${new Date().toLocaleTimeString()}.`,
        });
    }
    if (message.content.toLowerCase() == "do you like music") {
        return message.reply({
            content: "As a bot, I don't have preferences, but I know many people enjoy music!",
        });
        
    }
    if (message.content.toLowerCase() == "what is your favorite color") {
        return message.reply({
            content: "I don't have a favorite color, but I can help you with anything else you need!",
        });
    }
    if (message.content.toLowerCase() == "can you help me") {
        return message.reply({
            content: "Of course! Please tell me how I can assist you.",
        });
    }

    // message.reply({ 
    //     // content:"Hi from Bot",
    //     content:"can`t get your message",
    // })

});

//for intreraction
client.on('interactionCreate', (interaction) =>{
    //  console.log(interaction);
     interaction.reply("Please provide a tab link and wait for a sec");
})
client.on('guildMemberAdd', member => {
    // Get the new member's username
    const username = member.user.username;
    
    // Send personalized welcome message to the new member
    member.send(`Welcome to the server, ${username}! We're glad to have you here.`);
});

client.login("MTIyMDI2NTE5NjM3MTg0MTA4NQ.GUDy3m.tsMMgINVQTpQK7pZKAWDVh88rowi999QUSJT1Y");
