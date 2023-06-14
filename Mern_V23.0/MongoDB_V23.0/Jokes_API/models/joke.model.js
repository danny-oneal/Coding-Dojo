const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    punchline: {
        type: String,
        required: [true, "Punchline is required!"]
    },
    setup: {
        type: String,
        required: [true, "Setup is required!"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
