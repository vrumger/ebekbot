const telegraf = require(`telegraf`);
const bot = new telegraf(process.env.TOKEN);

require(`./handlers`)(bot);

bot.launch();
console.log(`Bot started...`);
