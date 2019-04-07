module.exports = bot => {
    bot.command(`help`, ctx => {
        ctx.reply(ctx.i18n(`help`));
    });
};
