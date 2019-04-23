const templates = [
    {
        command: `dark`,
        name: `Mildly Dark`,
        makeTheme: require(`../templates/mildly`),
    },
    {
        command: `black`,
        name: `Mildly Black`,
        makeTheme: require(`../templates/deeply`),
    },


    {
        command: `light`,
        name: `Mildly Light`,
        makeTheme: require(`../templates/light`),
    },
];

const commands = templates
    .map(template => template.command);

module.exports = bot => {
    bot.command(commands, async ctx => {
        const { text, entities } = ctx.message;
        const command = text.slice(1, entities[0].length);
        const hexCode = text.slice(entities[0].length).trim();

        const template = templates
            .find(template => template.command === command);

        if (!template) {
            return ctx.reply(ctx.i18n(`template.now_found`));
        } else if (!hexCode || hexCode.length !== `ffffff`.length) {
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
