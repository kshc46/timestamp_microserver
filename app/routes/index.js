'use strict';

var timeCheck = require(process.cwd() + '/app/controllers/timeCheck.js');

module.exports = function (app) {

    //var timeCheck = new timeCheck(db);

    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    
    app.get('/:dateTime', function(req, res) {
        var dateTime = req.params.dateTime;
        //res.send(dateTime)
        res.send(timeCheck(dateTime));
    });

};