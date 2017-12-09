const express = require('express');
const app = express();
const keys = require('./config/keys');


const mongoose = require('mongoose');
mongoose.connect(keys.mongoUri);
require('./models/character');


require('./routes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
