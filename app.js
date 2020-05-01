const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');

const {
    API_KEY,
    HOST,
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

const app = express();

app.use(bodyparser.json());

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const db_url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

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

app.listen(port, () => console.log(`App running successfully on port number ${port}...`));
