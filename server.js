const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const htmlroutes = require('./routes/htmlroutes')
const apiroutes = require('./routes/apiroutes')
const PORT = process.env.PORT || 4000;

const app = express();

//const db = require("./models");
// app.use(db);
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
//app.use('/', require('./routes/htmlroutes'));
//app.use('/', require('./routes/apiroutes'));

// routes
app.use('/', htmlroutes);
app.use('/api', apiroutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})