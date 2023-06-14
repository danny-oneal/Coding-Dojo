const express = require("express");

const jokesRouter = require("./routes/jokes.route");

require("dotenv").config();
require("./config/mongoose.config");

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/api/jokes", jokesRouter);

app.listen(port, () => console.log(`Jokes API on port ${port}`));
