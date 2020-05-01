const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');

const {
    API_KEY,
    HOST,
    PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

const app = express();

app.use(bodyparser.json());

const port = PORT || 3000;
const host = HOST || "localhost";

const db_url = `mongodb://${DB_HOST}:27017/${DB_NAME}`;

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
