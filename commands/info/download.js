const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'download',
    category : 'info',
    description : 'Download and Information',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        if (message.member.roles.cache.get("1014326501405102211")) {
            const mssg = await message.channel.send(message.author.tag + "```\n[⛔️] Blacklist !```")
        } 
        else {
        if (message.member.roles.cache.get("1014324327681892412")) {
            if (message.member.roles.cache.get("1014319440587915264")) {
                const mssg = await message.channel.send(message.author.tag + "```\n[😀] The Download with Information has been sent in a private message!```")
                const msg = await message.author.send("```\n Thank you for your trust and purchase! \n Enjoy😋```\n⬇️ **File :** https://cdn.discordapp.com/attachments/1012749638635368551/1013629019733905440/Darling_1.2.exe \n\n\n Your identifiers:```\nID : user148S531XF00``` ```KEY : cookiesD12PO94D1S2W300```  \n\n **Don’t forget to check the status :)** ")
            }
            if (message.member.roles.cache.get("1014319471910998097")) {
                const mssg = await message.channel.send(message.author.tag + "```\n[😕] FiveM is offline soory !```")
                }  
            if (message.member.roles.cache.get("1014319498351886346")) {
                    const mssg = await message.channel.send(message.author.tag + "```\n[😕] Spoofer is offline soory !```")
                } 
            }      
	    else {
            const mssg = await message.channel.send(message.author.tag + "```\n[⛔️] You don’t have a Fate subscription!```")
            }
        }


    }
}
