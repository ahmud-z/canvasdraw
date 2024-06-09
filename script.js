const canvas = document.getElementById('drawCanvas');
const drawContext = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let drawing = false;
let positionX = 0;
let positionY = 0;

canvas.addEventListener("mousedown", (e) => {
    init(e)
    drawing = true;
})

canvas.addEventListener("mouseup", (e) => {
    drawing = false;
})

canvas.addEventListener("mousemove", (e) => {
    draw(e);
})


function init(e) {
    positionX = e.offsetX;
    positionY = e.offsetY;
}

function draw(e) {
    if (drawing) {
        drawContext.beginPath();
        drawContext.moveTo(positionX, positionY);
        drawContext.lineTo(e.offsetX, e.offsetY);
        drawContext.stroke();
        drawContext.closePath();
        positionX = e.offsetX;
        positionY = e.offsetY;
    }
}

// color buttons
const clearBtn = document.getElementById('clearBtn');
const blackBtn = document.getElementById('blackBtn');
const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');
const colorPicker = document.getElementById('colorPickerBtn');

clearBtn.addEventListener('click', () => {
    drawContext.clearRect(0, 0, canvas.width, canvas.height);
})

blackBtn.addEventListener('click', () => {
    drawContext.strokeStyle = '#1E1E1E';
    colorPicker.value = '#1E1E1E';
})

redBtn.addEventListener('click', () => {
    drawContext.strokeStyle = '#FE0000';
    colorPicker.value = '#FE0000';
})

greenBtn.addEventListener('click', () => {
    drawContext.strokeStyle = '#4DFF00';
    colorPicker.value = '#4DFF00';
})

blueBtn.addEventListener('click', () => {
    drawContext.strokeStyle = '#0033FF';
    colorPicker.value = '#0033FF';
})

redBtn.addEventListener('click', () => {
    drawContext.strokeStyle = '#FE0000';
    colorPicker.value = '#FE0000';
})

colorPicker.addEventListener('change', (e) => {
    drawContext.strokeStyle = e.target.value;
})