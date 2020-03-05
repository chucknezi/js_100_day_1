// Set up an array of colors

const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ["blue", "red", "orange", "purple"];

body.style.backgroundColor = 'beige';

button.addEventListener('click', changeColor)

function changeColor(){
    const colorIndex= parseInt(Math.random()*colors.length+1)
    body.style.backgroundColor = colors[colorIndex]
}

