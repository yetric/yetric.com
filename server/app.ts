import express = require('express');
import Twig = require("twig");

// Create a new express application instance
const app: express.Application = express();

app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});


app.get('/', function (req, res) {
    res.render('index.twig', {
        message : "Hello World"
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
