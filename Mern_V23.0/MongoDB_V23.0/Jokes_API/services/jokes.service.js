const Joke = require("../models/joke.model");

module.exports.findAllJokes = async () => {
    const jokes = await Joke.find();
    return jokes;
};

module.exports.findJokeById = async (id) => {
    const joke = await Joke.findById(id);
    return joke;
};

module.exports.createJoke = async (joke) => {
    const newJoke = await Joke.create(joke);
    return newJoke;
};

module.exports.updateJoke = async (id, joke) => {
    const updatedJoke = await Joke.updateOne({ _id: id }, joke);
    return updatedJoke;
};

module.exports.deleteJoke = async (id) => {
    const deletedJoke = await Joke.deleteOne({ _id: id });
    return deletedJoke;
};
