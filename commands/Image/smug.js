const colors = require('./../../colors.json')
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "smug",
  aliases: [],
  description: "Return A Random shit!",
  usage: "smug",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: 'smug', Color: Color });
    
    return message.channel.send(Data);
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