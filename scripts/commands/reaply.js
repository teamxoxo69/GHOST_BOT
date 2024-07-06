const fs = require("fs");

module.exports.config = {
    name: "hasi2",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "Pixxi Foysal",
    description: "Just Respond",
    commandCategory: "no prefix",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    let react = event.body.toLowerCase();
    if (react.includes("😘") ||
        react.includes("😽") ||
        react.includes("💋") ||
        react.includes("👅") ||
        react.includes("👄") ||
        react.includes("😙") ||
        react.includes("😚") ||
        react.includes("👩‍❤️‍💋‍👨") ||
        react.includes("🫦")) {
        var msg = {
            body: "--এ্ই্ঁ বে্ঁডা্ঁ এ্ঁই্ঁস্ঁব্ঁ চু্ঁমা্ঁ চা্ঁপ্ঁটি্ঁ এ্ঁক্ঁদো্ঁম্ঁ ভা্ঁলা্ঁ লা্ঁগে্ঁ না্ঁহ্ঁ_!!🙈"
        };
        api.sendMessage(msg, threadID, messageID);
        api.setMessageReaction("🙈", messageID, (err) => {}, true);
    }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
