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
            return ctx.reply(`Incorrect color code. Please, try again`);
        }

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
};
