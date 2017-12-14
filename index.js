const express = require('express');
const app = express();
const keys = require('./config/keys');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const options = {
    'host': keys.mysqlHost,
    'user': keys.mysqlUser,
    'password': keys.mysqlPassword,
    'database': keys.mysqlDatabase,
}
const mysql = require('mysql2/promise');
mysql.createConnection(options).then(db => {
  require('./routes')(app,db)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
