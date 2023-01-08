var addButton = document.getElementById('increase');
var subtractButton = document.getElementById('decrease');
var counter = document.getElementById('number-of-players');
var count = 0;
addButton.addEventListener('click', function () {
    count += 1;
    counter.innerHTML = count.toString();
});
subtractButton.addEventListener('click', function () {
    count -= 1;
    counter.innerHTML = count.toString();
});
