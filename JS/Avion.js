
const countElement = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let count = 1;

increaseButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});

decreaseButton.addEventListener('click', () => {
  if (count > 1) {
    count--;
    countElement.textContent = count;
  }
});
