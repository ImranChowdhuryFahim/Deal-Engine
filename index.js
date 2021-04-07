const express = require("express");

const search = require('./routes/search')

const app = express();

app.use(search)

app.listen(process.env.PORT || 8000);