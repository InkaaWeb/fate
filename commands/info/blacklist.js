const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "blacklist",
  aliases : ['b'],
  description: "Blacklist user",
  
  run: async (client, message, args) => {

    if (message.member.roles.cache.get("1014312858290503751")) {
      let user = message.mentions.members.first();
        let mutedrole =  message.guild.roles.cache.get("1014326501405102211"); //We declare the id of the muted role
    
        if(!user) return message.channel.send("```[⛔️] User ?! Retry please.```");

        if(user.roles.cache.get("1014326501405102211")) {
          message.channel.send("```[⛔️] Error ! User has already blacklisted.```");
        }

        else {
          user.roles.add(mutedrole);
          const mssg = await message.channel.send(message.author.tag + "```\n[✔️] The user has been blacklist !```")
        }
    } 
    else {
      const mssg = await message.channel.send(message.author.tag + "```\n[⛔️] What are you doing?!```")
    }

    
  },
};
