// const { REST , Routes } = require("discord.js");

// const commands = [
//     {
//       name: 'ping',
//       description: 'Replies with Pong!',
//     },
//   ];
  
//   const rest = new REST({ version: '10' }).setToken("MTIyMDI2NTE5NjM3MTg0MTA4NQ.GUDy3m.tsMMgINVQTpQK7pZKAWDVh88rowi999QUSJT1Y");


//   (async ()=> {    

//         try {
//             console.log('Started refreshing application (/) commands.');
        
//             await rest.put(Routes.applicationCommands('1220265196371841085'), { body: commands });
        
//             console.log('Successfully reloaded application (/) commands.');
//         } catch (error) {
//             console.error(error);
//         }

//   }) ();
  
const { REST , Routes } = require("discord.js");

const commands = [
  {
    name: 'crmdown',
    description: 'Replies with message!',
  },
  {
    name: 'thankyou',
    description: 'Replies with message!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTIyMDI2NTE5NjM3MTg0MTA4NQ.GUDy3m.tsMMgINVQTpQK7pZKAWDVh88rowi999QUSJT1Y");
(async ()=> {   
try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1220265196371841085'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
}) ();