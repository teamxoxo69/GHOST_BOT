const fs = require("fs");
module.exports.config = {
	name: "hasi1",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Junior Simanto", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("😭") ||
     react.includes("🥹") || 
react.includes("🥺") || 
react.includes("😓") ||
react.includes("😩")) {
		var msg = {
				body: "-কি্ঁ হ্ঁয়ে্ঁছে্ঁ ব্ঁন্ধু্ঁ কা্ঁন্দ্ঁ কে্ঁনো্ঁ_!!😢😪🥀"
			}
    
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

