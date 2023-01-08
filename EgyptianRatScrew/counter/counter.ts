const addButton = document.getElementById('increase') as HTMLButtonElement;
const subtractButton = document.getElementById('decrease') as HTMLButtonElement;
const counter = document.getElementById('number-of-players') as HTMLElement;

let count = 0;

addButton.addEventListener('click', () => {
  count += 1;
  counter.innerHTML = count.toString();
});

subtractButton.addEventListener('click', () => {
  count -= 1;
  counter.innerHTML = count.toString();
});