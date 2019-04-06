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
        return ctx.reply(`Hello and welcome to Themes Painter bot. Please, use /help to learn how to use me.`);
    } else if (hexCode.length !== `ffffff`.length) {
        return ctx.reply(`Incorrect color code. Please, try again`);
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

bot.command('help', ({ reply }) => reply('Step-by-step guide to Theme Painter https://telegra.ph/Making-themes-using-Theme-Painter-04-06 '))

bot.command(`dark`, async ctx => {
    const hexCode = ctx.message.text
        .slice(`/dark`.length)
        .trim();

    if (!hexCode || hexCode.length !== `ffffff`.length) {
        return ctx.reply(`Incorrect color code. Please, try again`);
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

bot.command(`black`, async ctx => {
    const hexCode = ctx.message.text
        .slice(`/black`.length)
        .trim();

    if (!hexCode || hexCode.length !== `ffffff`.length) {
        return ctx.reply(`Incorrect color code. Please, try again`);
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
