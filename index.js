const templates = [`Mildly`, `Deeply`]
    .map(template => ({
        name: template,
        themeFile: require(`./templates/${template.toLowerCase()}`),
    }));

const telegraf = require(`telegraf`);
const bot = new telegraf(process.env.TOKEN);

bot.start(async ctx => {
    const hexCode = ctx.message.text
        .slice(`/start`.length)
        .trim();

    if (!hexCode) {
        return ctx.reply(`Oh hello there`);
    } else if (hexCode.length !== `ffffff`.length) {
        return ctx.reply(`Invalid hex code`);
    }

    templates
        .forEach(template => {
            const theme = template.themeFile(hexCode);

            ctx.replyWithDocument(
                {
                    source: Buffer.from(theme, `binary`),
                    filename: `${template.name} #${hexCode}.tgx-theme`,
                }, {
                    caption: `Theme by @tgxdark`,
                    reply_to_message_id: ctx.message.message_id,
                }
            );
        });
});

bot.command(`mildly`, async ctx => {
    const hexCode = ctx.message.text
        .slice(`/mildly`.length)
        .trim();

    if (!hexCode || hexCode.length !== `ffffff`.length) {
        return ctx.reply(`Invalid hex code`);
    }

    const template = templates[0];
    const theme = template.themeFile(hexCode);

    ctx.replyWithDocument(
        {
            source: Buffer.from(theme, `binary`),
            filename: `${template.name} #${hexCode}.tgx-theme`,
        }, {
            caption: `Theme by @tgxdark`,
            reply_to_message_id: ctx.message.message_id,
        }
    );
});

bot.command(`deeply`, async ctx => {
    const hexCode = ctx.message.text
        .slice(`/deeply`.length)
        .trim();

    if (!hexCode || hexCode.length !== `ffffff`.length) {
        return ctx.reply(`Invalid hex code`);
    }

    const template = templates[1];
    const theme = template.themeFile(hexCode);

    ctx.replyWithDocument(
        {
            source: Buffer.from(theme, `binary`),
            filename: `${template.name} #${hexCode}.tgx-theme`,
        }, {
            caption: `Theme by @tgxdark`,
            reply_to_message_id: ctx.message.message_id,
        }
    );
});

bot.launch();
console.log(`Bot started...`);
