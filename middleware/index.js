const middlewares = [
    `i18n`,
];

module.exports = bot =>
    middlewares.forEach(middleware =>
        require(`./${middleware}`)(bot)
    );
