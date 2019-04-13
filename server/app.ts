import express = require("express");
import Twig = require("twig");
import compression = require("compression");

Twig.cache(false); // TODO: Based on env

// Create a new express application instance
const app: express.Application = express();
app.use(express.static("public"));
app.use(compression());
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get("/", function(req, res) {
    res.render("index.twig");
});

app.get("/user-experience", function(req, res) {
    res.render("ux.twig");
});

app.get("/acquisition", function(req, res) {
    res.render("acquisition.twig");
});

app.get("/onboarding", function(req, res) {
    res.render("onboarding.twig");
});

app.get("/engagement", function(req, res) {
    res.render("engagement.twig");
});

app.get("/retention", function(req, res) {
    res.render("retention.twig");
});

app.get("/subscribe", function(req, res) {
    res.render("subscribe.twig");
});

app.get("/about", function(req, res) {
    res.render("about.twig");
});

app.get("/contact", function(req, res) {
    res.render("contact.twig");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});
