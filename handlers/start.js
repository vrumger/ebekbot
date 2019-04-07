const templates = [
    {
        name: `Mildly`,
        makeTheme: require(`../templates/mildly`),
    },
    {
        name: `Deeply`,
        makeTheme: require(`../templates/deeply`),
    },
];

module.exports = bot => {
    bot.start(async ctx => {
        const hexCode = ctx.message.text
            .slice(`/start`.length)
            .trim();

        if (!hexCode) {
            return ctx.reply(`Hello and welcome to Theme Painter bot! Please, use /help to learn how to use me.`);
        } else if (hexCode.length !== `ffffff`.length) {
            return ctx.reply(`Incorrect color code. Please, try again`);
        }

        templates
            .forEach(template => {
                const theme = template.makeTheme(hexCode);

                ctx.replyWithDocument(
                    {
                        source: Buffer.from(theme, `binary`),
                        filename: `${template.name} #${hexCode} [1.0].tgx-theme`,
                    }, {
                        caption: `Theme by @tgxdark`,
                        reply_to_message_id: ctx.message.message_id,
                    }
                );
            });
    });
};
