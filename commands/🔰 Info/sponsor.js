const { MessageEmbed } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: "sponsor",
  category: "🔰 Info",
  aliases: ["sponsors"],
  description: "Shows the sponsor of this BoT",
  usage: "sponsor",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed");
    let ls = client.settings.get(message.guild.id, "language");

    try {
      let embed1 = new MessageEmbed()
        .setColor(es.color)
        .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
        .setURL(
          "http://ABI-Host.de/?utm_source=bot&utm_medium=cpc&utm_id=tamilanABINESH"
        )
        .setDescription(
          `
Third Sponsor of This Bot is:
**ABINESH-HOST** THE BEST HOSTER
<a:arrow:1240881386773024788> ABI-Host.de is sponsoring them with some free / cheaper Hosting Methods,
<a:arrow:1240881386773024788> Thanks to them, we are able to host our Website, Bots and GAME SERVERS
<a:arrow:1240881386773024788> Our suggestion is, if you want to host Bots / Games / Websites, then go to [ABI-Host.de](http://ABI-Host.de/?utm_source=bot&utm_medium=cpc&utm_id=tamilanABINESH)

**What they are offering:**
<a:arrow:1240881386773024788> **>>** Minecraft Hosting, CounterStrike: Global Offensive, Garry's Mod, ARK, ARMA 3, ...
<a:arrow:1240881386773024788> **>>** Cheap and fast Domains
<a:arrow:1240881386773024788> **>>** WEBHOSTING
<a:arrow:1240881386773024788> **>>** TEAMSPEAK SERVERS
<a:arrow:1240881386773024788> **>>** Linux & Windows Root Servers

[**Discord Server:**](https://discord.ABI-Host.de)
[**Website:**](http://ABI-Host.de/?utm_source=bot&utm_medium=cpc&utm_id=tamilanABINESH)
[**__SPONSOR LINK!__**](https://main--abinesh9042.netlify.app//img/paysafecard.png)
`
        )
        .setImage("https://cdn.ABI-Host.de/img/logo/ABINESH_white.png")
        .setFooter("ABINESH-HOST", "https://imgur.com/jXyDEyb?.png");

      let embed2 = new MessageEmbed()
        .setColor(es.color)
        .setTimestamp()
        .setFooter(
          "Bittmax.de | Code  'x10' == -5%",
          "https://imgur.com/UZo3emk.png"
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png"
        )
        .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
        .setURL("https://bittmax.de").setDescription(`
<a:arrow:1240881386773024788> Bittmax is providing us, like ABINESH-HOST with free Discord Bot-Hosting technologies

<a:arrow:1240881386773024788> If you use the code: **\`x10\`** their, then you'll get at least 5% off everything!

<a:arrow:1240881386773024788> Check out their [Website](https://bittmax.de) and their [Discord](https://discord.gg/GgjJZCyYKD) to get your own Bot too!`);
      swap_pages2(client, message, [embed1, embed2]);
    } catch (e) {
      console.log(String(e.stack).grey.bgRed);
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(es.wrongcolor)
            .setFooter(client.getFooter(es))
            .setTitle(client.la[ls].common.erroroccur)
            .setDescription(
              eval(client.la[ls]["cmds"]["info"]["color"]["variable2"])
            ),
        ],
      });
    }
  },
};
/**
 * @INFO
 * Bot Coded by ABINESH9042 | https://discord.gg/NFTtFHcpgZ
 * @INFO
 * Work for ABINESH Development | https://main--abinesh9042.netlify.app/
 * @INFO
 * Please mention him / ABINESH Development, when using this Code!
 * @INFO
 */
