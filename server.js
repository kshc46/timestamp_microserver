'use strict';

var express = require('express'),
    mongo = require('mongodb').MongoClient,
    routes = require('./app/routes/index.js');
    

var app = express();

mongo.connect('mongodb://'+process.env.IP+':27017/timestamp_microserve', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }
    
    routes(app);
    
    /*app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    
    app.get('/:dateTime', function(req, res) {
        var dateTime = req.params.dateTime;
        timeCheck(dateTime, function(error, callback) {
            if (error) return error;
            res.sendFile(process.cwd() + '/public/index.html');
        });
    });*/
    
    app.listen(8080, function () {
        console.log('Listening on port 8080...');
    });

});