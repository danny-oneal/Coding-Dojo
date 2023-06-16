const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/products.route");

require("dotenv").config();
require("./config/mongoose.config");

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);

app.listen(port, () => console.log(`Product Manager API on port ${port}`));
