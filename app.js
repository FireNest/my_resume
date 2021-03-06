const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.listen(process.env.PORT || 3000, (req, res) => {

    console.log("app.js is tuned on 3000!");
});

app.get("/", (req, res) => {

    res.render("home", {});
});

app.get("/about", (req, res) => {

    res.render("about", {});
});

app.get("/work", (req, res) => {
    res.render("work", {});
});


