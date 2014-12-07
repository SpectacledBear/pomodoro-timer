var timerEventId;

function countdown(interval) {
    "use strict";
    /*jslint browser:true */

    var element, endTime;

    function setTimer() {
        var timeLeft, hours, minutes, seconds;
        timeLeft = new Date(endTime - new Date().getTime());

        if (timeLeft.getTime() < 1000) {
            element.innerHTML = "0:00";
            clearInterval(timerEventId);
        } else {
            hours = timeLeft.getUTCHours();
            minutes = timeLeft.getUTCMinutes();
            seconds = timeLeft.getUTCSeconds();
            element.innerHTML = (hours ? hours + ":" + minutes : minutes) + ":" + seconds;
        }
    }

    clearInterval(timerEventId);
    element = document.getElementById('timerText');
    endTime = new Date().getTime() + (1000 * interval) + 500;
    timerEventId = setInterval(setTimer, 1000);
}
