const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const config = require('./config');

const app = express();

app.use(bodyparser.json());

const port = process.env.PORT || config.PORT;
const host = process.env.HOST || config.HOST;
const db_url = `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/first_db`;

mongoose.connect(db_url, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log("Database connection established successfully");
    }
});

app.get('/', (req, res) => {
    res.send("container works");
});

app.listen(port, host, () => console.log(`App running successfully on port number ${port}...`));
