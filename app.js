const mongoose = require('mongoose');
const express = require('express');
const bodyparser=require('body-parser');
const app = express();

app.use(bodyparser.json());

const port = process.env.PORT || 3000;
const db_url = "mongodb://localhost:27017/first_db";

mongoose.connect(db_url, (err) => {
    if(err) {
        console.error("Error occured while connecting to mongodb");
    } else {
        console.log("Database connection esablished successfully");
    }
});

app.get('/', (req, res) => {
    res.send("container works");
});

app.listen(port, () => console.log(`App running successfully on port number ${port}...`));
