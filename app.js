const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');

const {
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

const port = PORT || 3000;
const host = HOST || "localhost";

const db_url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(db_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
  console.log("Db connected...");
});

var yogourtSchema = mongoose.Schema({
    yogourt: {
        type: String,
        required: true
    },
});

mongoose.model('Yogourts', yogourtSchema);

app.get('/', (req, res) => {
    res.send("container works");
});

app.post('/yogourt', (req, res) => {
	const yogourt = req.body;
	Yogourt.create(yogourt, (err, cb) => {
        if(err) {
            res.status(500).json({success: false, message: "Internal Server Error"});
        } else {
            res.json({success: true, vocab: vocab});
        }
    });
});

app.listen(port, host, () => console.log(`App running successfully on port number ${port}...`));
