const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//select the html elements

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//eventListener to btn

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
})