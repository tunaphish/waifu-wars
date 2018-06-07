const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Waifu');

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri)
  .catch(err => console.log(err));
  
require('./routes')(app);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);