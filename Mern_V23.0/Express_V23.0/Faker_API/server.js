const express = require("express");

const app = express();
const usersRouter = require("./routes/users.route");
const companiesRouter = require("./routes/companies.route");

app.use("/api/users", usersRouter);
app.use("/api/companies", companiesRouter);

app.listen(3001, () => console.log("Faker API on port 3001"));
