const express = require("express");
const cors = require('cors');

const search = require('./routes/search')

const app = express();

app.use(cors());

app.use(search)

app.listen(process.env.PORT || 8000);