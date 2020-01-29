const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

app.listen(PORT);


