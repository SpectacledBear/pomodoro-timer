var timerEventId;

function countdown(interval) {
    "use strict";
    /*jslint browser:true */

    var alarmElement, endTime, timerElement;

    function formatTimeSegment(segment) {
        if (segment.toString().length < 2) {
            segment = "0" + segment;
        }

        return segment;
    }

    function setTimer() {
        var timeLeft, hours, minutes, seconds;
        timeLeft = new Date(endTime - new Date().getTime());

        if (timeLeft.getTime() < 1000) {
            timerElement.innerHTML = "00:00";
            clearInterval(timerEventId);
            alarmElement.currentTime = 0;
            alarmElement.play();
        } else {
            hours = timeLeft.getUTCHours();
            minutes = formatTimeSegment(timeLeft.getUTCMinutes());
            seconds = formatTimeSegment(timeLeft.getUTCSeconds());
            timerElement.innerHTML = (hours ? hours + ":" + minutes : minutes) + ":" + seconds;
        }
    }

    clearInterval(timerEventId);
    alarmElement = document.getElementById('alarm');
    alarmElement.pause();
    timerElement = document.getElementById('timerText');
    endTime = new Date().getTime() + (1000 * interval) + 1000;
    timerEventId = setInterval(setTimer, 1000);
}
