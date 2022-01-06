const input = document.getElementById('text');
const button = document.getElementById('btn');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const range = document.getElementById('range');
const eBtn = document.getElementById('e_btn');
let color;

const addColor = function (e) {
    return color = e.target.value;
}

const newColor = function () {
    square.style.backgroundColor = color;
}

const newValue = function(e) {
    value = e.target.value;
    circle.style.width = circle.style.height = value+'%';       `       `
}

eBtn.style.display = 'none';



input.addEventListener('input', addColor);
button.addEventListener('click', newColor);
range.addEventListener('input', newValue);




