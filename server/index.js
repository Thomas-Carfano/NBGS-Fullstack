const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");

const PORT = 3030;
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    } else {
        console.log('not working')
    }
})