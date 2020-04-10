function digitalClock() {
    const date = new Date();
    const hours = date.getHours() + '';
    const minutes = date.getMinutes() + '';
    const seconds = date.getSeconds() + '';
    const day = date.getDay();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = clock;
}
digitalClock();
setInterval(digitalClock, 1000);
