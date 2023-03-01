const container = document.querySelector('.container')
const square = document.querySelectorAll('div')
const squareArr = Array.prototype.slice(square);

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div')
    container.appendChild(square);
}

 for (let i = 0; i < squareArr.length; i++) {
    (function(index) {
        squareArr[index].addEventListener('click', changeColor(i)); 
});

function changeColor(i) {
 return function() {
     console.log("you clicked region number " + i);
 };
};