const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "thanks",
  aliases : ['t'],
  description: "Pour validé une commande",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#33cc33"
        ? "#ffffff"
        : message.guild.me.displayHexColor;


      const embed = new MessageEmbed()
        .setTitle("Thank you for your purchase at Fate !")
        .setDescription(
          `Use \`${prefix}download\` to have your product directly in your DM!.`
        )
        .setFooter(
          `Commande validée par ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("#33cc33");
      return message.channel.send(embed);
  },
};
