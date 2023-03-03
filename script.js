const container = document.querySelector('.container')
const button = document.querySelector('.btn');
let globalInput = 16;

function createGrid() {
    for (let row = 0; row < globalInput; row++) {   for (let column = 0; column < globalInput; column++) {
        const square = document.createElement ('div');
        container.appendChild(square);
        }
    }
};

createGrid();

button.addEventListener('click', () => {
    let userInput = prompt('Number of squares', 16);
    window.globalInput = userInput
});

function updateGrid() {
    
}

const square = document.querySelectorAll('div');
const squareArr = Array.prototype.slice(square);

for (let i = 0; i < squareArr.length; i++) {
    squareArr[i].addEventListener("click", changeColor);

    function changeColor(i) {
        $(i).css('backgroundColor', 'blue');
    }   
};






