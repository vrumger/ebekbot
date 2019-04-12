const handlers = [
    `start`,
    `help`,
    `theme`,
];

module.exports = bot =>
    handlers.forEach(handler =>
        require(`./${handler}`)(bot)
    );
