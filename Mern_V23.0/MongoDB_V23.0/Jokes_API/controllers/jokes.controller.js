const jokesService = require("../services/jokes.service");

module.exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await jokesService.findAllJokes();
        res.json(jokes);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.getJoke = async (req, res) => {
    try {
        const joke = await jokesService.findJokeById(req.params.id);
        res.json(joke);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.postJoke = async (req, res) => {
    try {
        const joke = await jokesService.createJoke(req.body);
        res.json(joke);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.patchJoke = async (req, res) => {
    try {
        const joke = await jokesService.updateJoke(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports.deleteJoke = async (req, res) => {
    try {
        const joke = await jokesService.deleteJoke(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        res.json({ error: err });
    }
};
