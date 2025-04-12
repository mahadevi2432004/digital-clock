// Get elements
const hrsElement = document.getElementById("hrs");
const minsElement = document.getElementById("mins");
const secdElement = document.getElementById("secd");
const ampmElement = document.getElementById("ampm");

const hhCircle = document.getElementById("hh");
const mmCircle = document.getElementById("mm");
const ssCircle = document.getElementById("ss");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12; // 12:00 instead of 0:00
    }

    // Format time
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the DOM elements
    hrsElement.textContent = hours;
    minsElement.textContent = minutes;
    secdElement.textContent = seconds;
    ampmElement.textContent = ampm;

    // Rotate the circles based on the time
    let hoursRotation = (360 / 12) * (hours % 12 + minutes / 60);
    let minutesRotation = (360 / 60) * minutes;
    let secondsRotation = (360 / 60) * seconds;

    hhCircle.style.transform = `rotate(${hoursRotation}deg)`;
    mmCircle.style.transform = `rotate(${minutesRotation}deg)`;
    ssCircle.style.transform = `rotate(${secondsRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
