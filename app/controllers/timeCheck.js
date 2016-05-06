'use strict';

function timeCheck(dateTime){
    var dataNormal;
    var dataUnix;
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    var date;
    if (isNaN(dateTime)) {
        date = new Date(dateTime);
    } else {
        date = new Date(Number(dateTime));
    }
    
    if(date.getTime() > 0) {
        dataNormal = monthNames[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear();
        dataUnix = date.getTime();
    } else {
        dataNormal = 'N/A';
        dataUnix = 'N/A';
    }
    
    var timeJSON = JSON.stringify({'normal': dataNormal, 'unix': dataUnix });
    return timeJSON;
}

module.exports = timeCheck;