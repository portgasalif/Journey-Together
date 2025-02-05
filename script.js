const targetDate = new Date("2022-02-02");
console.log(targetDate);

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function timePassed() {
    const dateNow = Date.now() - targetDate.getTime();

    days = Math.floor(dateNow / (24 * 60 * 60 * 1000));
    hours = Math.floor((dateNow % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    minutes = Math.floor((dateNow % (60 * 60 * 1000)) / (60 * 1000));
    second = Math.floor((dateNow % (60 * 1000)) / 1000);

    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    second = String(second).padStart(2, '0');

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = second;
}

timePassed();
setInterval(timePassed, 1000);
