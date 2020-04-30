const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    API_KEY
} = process.env;

const app = express();

app.use(bodyparser.json());

const port = process.env.PORT || 3000;
const db_url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/first_db`;

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
