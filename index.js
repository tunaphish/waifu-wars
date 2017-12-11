const express = require('express');
const app = express();
const keys = require('./config/keys');



require('./routes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
