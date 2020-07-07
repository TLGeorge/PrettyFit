const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

//const db = require("./models");
// app.use(db);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
//app.use('/', require('./routes/htmlroutes'));
//app.use('/', require('./routes/apiroutes'));

// routes
app.use('/', require('./routes/htmlroutes'));
app.use('/api', require('./routes/apiroutes'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})