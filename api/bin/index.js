/// <reference path="../typings/index.d.ts" />
"use strict";
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
var app = express();
// socket.default.init(app);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/testetheos");
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'PUT, POST, DELETE, GET');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
});
app.options('*', function (req, res, next) {
    if (req.method == 'OPTIONS')
        res.sendStatus(200);
});
app.use('/api', routes);
app.use(function (req, res, next) {
    let err;
    err = new Error('Not found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});
app.listen(1337);
