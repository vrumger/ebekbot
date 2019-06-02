const middlewares = [
    `errors`,
    `i18n`,
];

module.exports = bot =>
    middlewares.forEach(middleware =>
        require(`./${middleware}`)(bot)
    );
