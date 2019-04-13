import express = require("express");
import Twig = require("twig");
import compression = require("compression");

Twig.cache(false); // TODO: Based on env

const app: express.Application = express();
app.use(express.static("../public"));
app.use(compression());
app.set('views', __dirname + '/../views');
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get("/", function(req: express.Request, res: any) {
    res.render("index.twig");
});

app.get("/user-experience", function(req: express.Request, res: any) {
    res.render("ux.twig");
});

app.get("/acquisition", function(req: express.Request, res: any) {
    res.render("acquisition.twig");
});

app.get("/onboarding", function(req: express.Request, res: any) {
    res.render("onboarding.twig");
});

app.get("/engagement", function(req: express.Request, res: any) {
    res.render("engagement.twig");
});

app.get("/retention", function(req: express.Request, res: any) {
    res.render("retention.twig");
});

app.get("/subscribe", function(req: express.Request, res: any) {
    res.render("subscribe.twig");
});

app.get("/about", function(req: express.Request, res: any) {
    res.render("about.twig");
});

app.get("/contact", function(req: express.Request, res: any) {
    res.render("contact.twig");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});
