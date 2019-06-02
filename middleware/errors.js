/* eslint-disable quotes, no-console */

module.exports = bot => {
    bot.catch(error => {
        console.error((error.stack || error.toString()).replace(/^/gm, `  `));
    });
};
