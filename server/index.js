const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const PORT = 3030;
app.use(morgan("dev"));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
    const auth = req.headers.authorization;
    const token = auth?.startsWith("Bearer") ? auth.slice(7) : null;
    try {
      const { id } = jwt.verify(token, process.env.JWT);
      req.userID = id;
    } catch (err) {
      req.userID = null;
    }
    next();
  });

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/location', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.use("/auth", require("./auth"));


app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    } else {
        console.log('not working')
    }
});