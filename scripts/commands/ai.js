module.exports.config = {
    name: "ai",
    version: "1.1.0",
    permssion: 0,
    credits: "Emon",
    description: "ask anything",
    prefix: 'awto',
    category: "ai",
    usages: "[ask]",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("Please provide a question...", tid, mid);
     try {
            api.setMessageReaction("🔍", event.messageID, (err) => {}, true);
            api.sendMessage("🕟 | processing....", threadID, messageID);
        const res = await axios.get(`https://gemini-api-l3g4.onrender.com/gemini?q=${content}`);
        const respond = res.data.generated_text;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
          api.setMessageReaction("✅", event.messageID, (err) => {}, true);
            api.sendMessage('🖇「 answer 」: \n' + respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};
