const template = {
    name: `Mildly`,
    makeTheme: require(`../templates/mildly`),
};

module.exports = bot => {
    bot.command(`dark`, async ctx => {
        const hexCode = ctx.message.text
            .slice(`/dark`.length)
            .trim();

        if (!hexCode || hexCode.length !== `ffffff`.length) {
            return ctx.reply(ctx.i18n(`hex.invalid`));
        }

        const theme = template.makeTheme(hexCode);

        ctx.replyWithDocument(
            {
                source: Buffer.from(theme, `binary`),
                filename: ctx.i18n(`theme.name`, {
                    name: template.name,
                    color: hexCode,
                }),
            }, {
                caption: ctx.i18n(`theme.caption`),
                reply_to_message_id: ctx.message.message_id,
            }
        );
    });
};
