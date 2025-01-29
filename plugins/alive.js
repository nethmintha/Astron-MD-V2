const {cmd , commands} = require('../command')
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["bot","robo"],
    react: "🤡",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
     await robin.sendPresenceUpdate('recording', from); 
     await robin.sendMessage(from, { audio: { url: "https://github.com/nethmintha/example_da/raw/refs/heads/main/auto_voice/Astron%20joker.MP3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

