const express = require("express");
const cors = require("cors");
const db = require("./models");
const search = require("./routes/search");
const trackProduct = require("./routes/trackProducts");
const createProduct = require("./routes/createProducts");
const chartData = require("./routes/chart");
const product = require("./routes/product");
const upload = require("./routes/upload");
const download = require("./routes/download");
require("events").EventEmitter.prototype._maxListeners = 100;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/Images", express.static("./Images"));
app.use(search);
app.use(trackProduct);
app.use(createProduct);
app.use(chartData);
app.use(product);
app.use(download);
app.use(upload);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT | 8000, () => {
    console.log("server started");
  });
});
