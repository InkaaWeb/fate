const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "client",
  aliases : ['c'],
  description: "Pour prendre commande",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#33cc33"
        ? "#ffffff"
        : message.guild.me.displayHexColor;


      const embed = new MessageEmbed()
        .setTitle("Want to buy at Fate ?")
        .setDescription(
          `**Payment here: https://utip.io/inkaweb.** \n **After your payment take screenshots and send them in the ticket! **  \n \n *Payment authorized only by Credit Card.*`
        )
        .setFooter(
          `Request by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("#333333");
      return message.channel.send(embed);
  },
};
