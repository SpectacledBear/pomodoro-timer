function countdown(interval) {
    "use strict";
    /*jslint browser:true */

    var endTime, timerEventId;

    function setTimer() {
        var element, timeLeft, hours, minutes, seconds;
        element = document.getElementById('timerText');
        timeLeft = new Date(endTime - new Date().getTime());

        if (timeLeft.getTime() < 1000) {
            element.innerHTML = "0:00";
        } else {
            hours = timeLeft.getUTCHours();
            minutes = timeLeft.getUTCMinutes();
            seconds = timeLeft.getUTCSeconds();
            element.innerHTML = (hours ? hours + ":" + minutes : minutes) + ":" + seconds;
            timerEventId = document.setTimeout(setTimer, timeLeft.getUTCMilliseconds() + 500);
        }
    }

    endTime = new Date().getTime() + (1000 * interval) + 500;
    setTimer();
}
