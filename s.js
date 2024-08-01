let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 1;
    }
    if (minutes === 60) {
      hours++;
      minutes = 1;
    }
    updateDisplay();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopStopwatch() {
  clearInterval(interval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  clearInterval(interval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function updateDisplay() {
  document.getElementById('hours').innerText = pad(hours);
  document.getElementById('minutes').innerText = pad(minutes);
  document.getElementById('seconds').innerText = pad(seconds);
}

function pad(time) {
  return time.toString().padStart(2, '0');
}
