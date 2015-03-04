var timerEventId;

function publishTimer(timer) {
    "use strict";
    /*jslint browser:true */

    var timerElement;

    timerElement = document.getElementById('timerText');
    timerElement.innerHTML = timer;
    document.title = "Pomodoro Timer [" + timer + "]";
}

function countdown(interval) {
    "use strict";
    /*jslint browser:true */

    var alarmElement, endTime;

    function formatTimeSegment(segment) {
        if (segment.toString().length < 2) {
            segment = "0" + segment;
        }

        return segment;
    }

    function setTimer() {
        var formattedTime, timeLeft, hours, minutes, seconds;
        timeLeft = new Date(endTime - new Date().getTime());

        if (timeLeft.getTime() < 1000) {
            formattedTime = "00:00";
            publishTimer(formattedTime);
            clearInterval(timerEventId);
            alarmElement.currentTime = 0;
            alarmElement.play();
        } else {
            hours = timeLeft.getUTCHours();
            minutes = formatTimeSegment(timeLeft.getUTCMinutes());
            seconds = formatTimeSegment(timeLeft.getUTCSeconds());
            formattedTime = (hours ? hours + ":" + minutes : minutes) + ":" + seconds;
            publishTimer(formattedTime);
        }
    }

    clearInterval(timerEventId);
    alarmElement = document.getElementById('alarm');
    alarmElement.pause();
    endTime = new Date().getTime() + (1000 * interval) + 1000;
    timerEventId = setInterval(setTimer, 1000);
}

window.onload = function () {
    "use strict";

    publishTimer("00:00");
};
