const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

stopBtn.disabled = true;

let intervalId = null;

function onStartBtn() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = colors[randomNumber(0, colors.length - 1)];
  }, 1000);

  stopBtn.disabled = false;
  startBtn.disabled = true;

  startBtn.removeEventListener('click', onStartBtn);
}

function onStopBtn() {
  clearInterval(intervalId);

  stopBtn.disabled = true;
  startBtn.disabled = false;

  startBtn.addEventListener('click', onStartBtn);
}
