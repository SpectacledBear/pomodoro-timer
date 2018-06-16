/*jslint esversion: 6 */
let timerEventId;

function publishTimer(timer) {
    "use strict";

    const timerElement = document.getElementById("timerText");
    timerElement.innerHTML = timer;
    document.title = "[" + timer + "] Pomodoro Timer";
}

function stopTimer() {
    const alarmElement = document.getElementById("alarm");

    clearInterval(timerEventId);
    alarmElement.pause();
    publishTimer('00:00');
};

function countdown(interval) {
    "use strict";

    const alarmElement = document.getElementById("alarm");

    let endTime;

    function formatTimeSegment(segment) {
        if (segment.toString().length < 2) {
            segment = "0" + segment;
        }

        return segment;
    };

    function setTimer() {
        let formattedTime, timeLeft, hours, minutes, seconds;
        timeLeft = new Date(endTime - Date.now());

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
    };

    clearInterval(timerEventId);
    alarmElement.pause();
    endTime = Date.now() + (1000 * interval) + 1000;
    timerEventId = setInterval(setTimer, 100);
};

window.onload = function () {
    "use strict";

    stopTimer();
};
