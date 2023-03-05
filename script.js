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

function createContainer(input) {
    const container = document.createElement('p');
    container.classList.add('container');
    container.style['grid-template-columns'] = `repeat(${input}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${input}, 1fr)`;
    body.appendChild(container);
    window.cont = container;
};

function createGrid(input) {
    for (let row = 0; row < input; row++){          
        for (let column = 0; column < input; column++) {
            const square = document.createElement ('div');
            cont.appendChild(square);
            const squar = document.querySelectorAll('div')
            window.squareList = squar;
            }
                squareList.forEach((item) => {
                    item.addEventListener('mouseover', () =>
                    item.style.backgroundColor = `${color}`);
                });
                
    }
};

createContainer(16);
createGrid(16);

function updateGrid() {
    cont.remove();
    createContainer(globalInput);
    createGrid(globalInput);
}





