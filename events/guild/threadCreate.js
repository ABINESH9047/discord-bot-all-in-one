//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by ABINESH| https://main--abinesh9042.netlify.app/
 * @INFO
 * Work for ABINESH DEVELOPEMENT | https://ABINESH.tech
 * @INFO
 * Please mention him / ABINESH DEVELOPEMENT, when using this Code!
 * @INFO
 */
