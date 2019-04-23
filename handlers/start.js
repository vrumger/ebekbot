const templates = [
    {
        name: `Mildly Dark`,
        makeTheme: require(`../templates/mildly`),
    },
    {
        name: `Mildly Black`,
        makeTheme: require(`../templates/deeply`),
    },
   {
      name: `Mildly Light`,
        makeTheme: require(`../templates/light`),

    },
];

module.exports = bot => {
    bot.start(async ctx => {
        const hexCode = ctx.message.text
            .slice(`/start`.length)
            .trim();

        if (!hexCode) {
            return ctx.reply(ctx.i18n(`start`));
        } else if (hexCode.length !== `ffffff`.length) {
            return ctx.reply(ctx.i18n(`hex.invalid`));
        }

        templates
            .forEach(template => {
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
    });
};
