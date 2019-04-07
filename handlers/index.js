const handlers = [
    `start`,
    `help`,
    `mildly`,
    `deeply`,
];

module.exports = bot =>
    handlers.forEach(handler =>
        require(`./${handler}`)(bot)
    );
