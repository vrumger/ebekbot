const template = {
    name: `Deeply`,
    makeTheme: require(`../templates/deeply`),
};

module.exports = bot => {
    bot.command(`black`, async ctx => {
        const hexCode = ctx.message.text
            .slice(`/black`.length)
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
