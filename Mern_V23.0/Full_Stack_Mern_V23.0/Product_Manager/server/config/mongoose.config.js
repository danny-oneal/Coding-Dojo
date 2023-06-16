const mongoose = require("mongoose");
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
mongoose
    .connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch((err) => console.log("Something went wrong when connecting to the database", err));
