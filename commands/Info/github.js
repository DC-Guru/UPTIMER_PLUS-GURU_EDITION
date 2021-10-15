const { Discord, discord } = require("discord.js");
const colors = require('./../../colors.json')
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
        name: "github",
        description: "Github User Account Information!",
        usage: "m/github <name>",
        example: "1) m/github MSVFORYOU",
        aliases: ["git"],
    run: async (client, message, args) => {

       try {

  if (!args[0]) return message.channel.send(`Please Give Me A Username!`)
    
  fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {
      if(body.message) return message.channel.send(`User Not Found | Please Give Me A Valid Username!`);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio, moment, pushed_at} = body;

            const embed = new MessageEmbed()
            .setAuthor(`${login} Information!`, `${avatar_url}`)
            .setColor(colors.uptime)
            .setThumbnail(`${avatar_url}`)
            .addField(`Username`, `${login}`)
            .addField(`ID`, `${id}`)
            .addField(`Bio`, `${bio || "No Bio"}`)
            .addField(`Public Repositories`, `${public_repos || "None"}`, true)
            .addField(`Followers`, `${followers}`, true)
            .addField(`Following`, `${following}`, true)
            .addField(`Location`, `${location || "No Location"}`)
            .setFooter(`Tysm For Using Me! ${message.author.username}`)

            message.channel.send(embed)

    })

        } catch (error) {
            console.log(`[Commands] [github] Getting Error In github Command :\n`, error);
            return message.channel.send(`Something Went Wrong Try Again Later!`)
        }
    }
};



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */