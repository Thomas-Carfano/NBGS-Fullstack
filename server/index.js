const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const PORT = 3030;
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

//Loading Middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// Check requests for a token and attach the decoded id to the request
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

//Static file serving middle-ware
app.use(express.static(path.join(__dirname, "../client/dist")));

// Serves the HTML files that Vite builds
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

// Backend routes
app.use("/auth", require("./auth"));
app.use("/storeDB", require("./storeDB"));

//Start App on Port
app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    } else {
        console.log('not working')
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });

// Default to 404 if no other route matched
app.use((req, res) => {
    res.status(404).send("404 Error");
  });