const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
     aliases: ["h"],
       run: async (client, message, args ) => {
             //--------------------------------------S T A R T---------------------------------------
        const embed = new Discord.MessageEmbed()
                .setTitle('')
                        .setFooter("Page Home\n"+ client.user.username + " | Made by: RogmitOp", client.user.displayAvatarURL())
                                .setImage(`https://cdn.discordapp.com/attachments/820950216249180170/881037152576737320/standard.gif`)
                                        .addField("š **__My Features__**",
                                        `>>> One of the best š¹ **all-in-one** Discord Bot! Moderation, Info, Utility, Ticket, and also a new awesome __**Uptimer+**__ System!
 ā«ļø Many **Fun** Commands (50+)
 ā«ļø **Admin** and **Auto-Moderation** and way much more!
 ā«ļø **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
                                                .addField(" š **__Uptimer+__**",">>> Uptimer Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online __24/7__ Just By Using A **Single** Command.\n__Uptimer+ Commands__\n`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`",)
                                                        .addField("š __How to use:__",">>> __Add the bot__ to your discord server\n Type `!howtouse` and get information")
                                                                .setColor(colors.uptime);
        const embed1 = new Discord.MessageEmbed()
                .setTitle('š”ļø Admin, šØ Moderation & āļø Auto-Moderation')
                        .addField("ć¤ā ā ā  \nš”ļø **Admin**",
                                  "> `addemoji`, `addrole`, `auditlog`, `ban`, `dm`, `embedsay`, `hackban`, `kick`, `lock`, `nuke`, `removerole`, `unban`, `unlock`\n\nšØ **Moderation**\n> `lock`, `mute`, `purge`, `reset-warns`, `say`, `slowmode`, `unlock`, `unmute`, `warn`, `warning`\n\nāļø **Auto-Moderation**\n> `anti-alt`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `roleall`"
                                          )
                                                .setThumbnail(client.user.displayAvatarURL())
                                                      .setColor(colors.uptime);
        const embed2 = new Discord.MessageEmbed()
              .setTitle('š Info, š® Aura & š General')
                    .addField("ā ā ā  \nš **Info**",
                            "> `botinfo`, `bugreport`, `developer`, `djs`, `feedback`, `github`, `help`, `roleinfo`, `serverinfo`, `uptimer`, `userinfo`\n\nš® **Aura**\n> `addword`, `blacklist-server`, `blacklist-user`, `delword`, `whitelist-add`, `whitelist-delete`, `whitelist`, `wordlist`\n\nš **General**\n> `akinator`, `ascii`, `avatar`, `calculator`, `choose`, `colour`, `country`, `emojify`, `firstmessage`, `invite`, `reverse`, `servericon`, `weather`"
                                  )
                                        .setThumbnail(client.user.displayAvatarURL())
                                              .setColor(colors.uptime);
        const embed3 = new Discord.MessageEmbed()
              .setTitle('š¤£ Fun & š¼ļø Images')
                    .addField("ć¤ā ā ā  \nš¤£ **Fun**","> `battleship`, `coinflip`, `coronavirus`, `deepfry`, `drake`, `eightball`, `flipcoin`, `hack`, `hangman`, `joke`, `meme`, `snipe`, `sudo`, `tictactoe`, `trivia`, `yt`\n\nš¼ļø **Image**\n> `dog`, `fire`, `fox`, `gay`, `jail`, `kangaroo`, `tweet`, `neko`, `nekogif`, `holo`, `cuddle`, `foxgirl`, `waifu`, `smug`, `baka`, `slap`, `poke`, `feed`, `pat`, `hug`, `kemonomimi`, `kiss`, `tickle`")
                          .setThumbnail(client.user.displayAvatarURL())
                                .setColor(colors.uptime);
       const embed4 = new Discord.MessageEmbed()
             .setTitle('š Owner, š¬ ChatBot & āļø Utility')
                   .addField("ć¤ā ā ā  \nš **Owner**",
                           "> `eval`, `reloadcmd`, `serverlist`, `bot-token`\n\nš¬ ChatBot\n> `remove-channel`, `set-channel`\n\nāļø **Utility**\n> `advice`, `announce`, `binary`, `minecraft`, `membercount`, `members`, `serverinfo`"
                                 )
                                       .setThumbnail(client.user.displayAvatarURL())
                                             .setColor(colors.uptime);

       const embed5 = new Discord.MessageEmbed()
             .setTitle('šļø Ticket, š Giveaways & š¤ Uptimer')
                   .addField("ć¤ā ā ā  \nšļø **Ticket**",
                           "> `tadd`, `tclose`, `tnew`, `tremove`\n\nš **Giveaways**\n> `gstart [channel] [time] [winners] [prize]`,\n> `gend [giveaway-id]`,\n> `greroll [giveaway-id]`\n\nš¤ **Uptimer **\n> `add`, `ping`, `projects`, `remove`, `stats`, `total`, `uptime`, `howtouse`")
                                 .setThumbnail(client.user.displayAvatarURL())
                                       .setColor(colors.uptime);
        //-----------------------------OPTIONS----------------------
        let option1 = new MessageMenuOption()
                .setLabel('š”ļø Admin, šØ Moderation & āļø Auto-Moderation')
                        .setEmoji('898223278005571614')
                                .setValue('option1')
                                
        let option2 = new MessageMenuOption()
                .setLabel('š Info, š® Aura & š General')
                        .setEmoji('898223316106641488')
                                .setValue('option2')
                                
        let option3 = new MessageMenuOption()
                .setLabel('š¤£ Fun & š¼ļø Images')
                        .setEmoji('898223347383566406')
                                .setValue('option3')
                                
        let option4 = new MessageMenuOption()
                .setLabel('š Owner, š¬ ChatBot & āļø Utility')
                        .setEmoji('898223364143972403')
                                .setValue('option4')
                                
        let option5 = new MessageMenuOption()
                .setLabel('š« Ticket, š Giveaways & š¤ Uptimer')
                        .setEmoji('898223378362695722')
                                .setValue('option5')
                                
    let select = new MessageMenu()
            .setID('selector')
                    .setPlaceholder('Click here to view the help menu!')
                            .setMaxValues(1)
                                    .setMinValues(1)
                                            .addOptions(option1, option2, option3, option4, option5)
        //-----------------------------OPTIONS----------------------
    const Sendmenu = await message.channel.send(embed, select);
    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
        let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });
    collector.on("collect" , (b) => {
            if(b.values[0] == "option1") {
                        Sendmenu.edit(embed1, select)
                                }
        if(b.values[0] == "option2") {
                    Sendmenu.edit(embed2, select)
                            }
        if(b.values[0] == "option3") {
                    Sendmenu.edit(embed3, select)
                            }
        if(b.values[0] == "option4") {
                    Sendmenu.edit(embed4, select)
                            }
        if(b.values[0] == "option5") {
                    Sendmenu.edit(embed5, select)
                            }
        if(b.values[0] == "option6") {
                    Sendmenu.edit(embed6, select)
                            }
        b.reply.defer();
            })
    collector.on("end", (b) => {
            Sendmenu.edit("ā This help menu is expired! Please retype the command to view again.")
                })
    }
      };

/**
 * @INFO
 *  * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 *  * @INFO
 * Please mention Him , when using this Code!
 *  * @INFO
 */