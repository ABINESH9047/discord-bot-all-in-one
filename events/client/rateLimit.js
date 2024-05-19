//here the event starts
const { events: { rateLimit } } = require("../../botconfig/settings.json");
module.exports = (client, rateLimitData) => {
    if(rateLimit) {
        console.log(JSON.stringify(rateLimitData).grey)
    }
}
/**
  * @INFO
  * Bot Coded by ABINESH9042 | https://main--abinesh9042.netlify.app/
  * @INFO
  * Work for ABINESH Development | https://main--abinesh9042.netlify.app/
  * @INFO
  * Please mention him / ABINESH Development, when using this Code!
  * @INFO
*/
