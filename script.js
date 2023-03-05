const body = document.querySelector('.huy');
const button = document.querySelector('.btn');
let color = document.getElementById('colorselect').value;

button.addEventListener('click', () => {
    let userInput = prompt('Number of squares', 16);
    if (userInput <= 100) {
        window.globalInput = userInput;
    } else {
        window.globalInput = 16;
    }
    updateGrid();
});

function createGrid(input) {
    const container = document.createElement('p');
    container.classList.add('container');
    container.style['grid-template-columns'] = `repeat(${input}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${input}, 1fr)`;
    body.appendChild(container);
    window.cont = container;
        for (let row = 0; row < input; row++) {   for (let column = 0; column < input; column++) {
            const square = document.createElement ('div');
            container.appendChild(square);
            const squar = document.querySelectorAll('div')
            window.squareList = squar;
            }
                squareList.forEach((item) => {
                    item.addEventListener('mouseover', () =>
                    item.style.backgroundColor = `${color}`);
                });
            
        }
};

createGrid(16);

function updateGrid() {
    cont.remove();
    createGrid(globalInput);
}

//const square = document.querySelectorAll('div');
//const squareArr = Array.from(square);

//function changeColor(i) {
//    i.style.backgroundColor = 'black';
//}   

//for (let i = 0; i < squareArr.length; i++) {
//    squareArr[i].addEventListener('mouseover', changeColor);
//}

console.log(color);



