const body = document.querySelector('.huy');
const button = document.querySelector('.btn');
const color = document.getElementById('colorselect');
let gridColor = document.getElementById('colorselect').value;

color.addEventListener('change', () => {
    let colour = document.getElementById('colorselect').value;
    gridColor = colour;
})

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
    const footer = document.createElement('span');
    footer.classList.add('footer');
    body.appendChild(footer);
    const footertext = document.createElement('span');
    footertext.textContent = 'Copyright © Sharpy17';
    footertext.classList.add('footer-text');
    footer.appendChild(footertext);
    window.foot = footer;
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
                    item.style.backgroundColor = `${gridColor}`);
                });
    }
};

createContainer(16);
createGrid(16);

function updateGrid() {
    cont.remove();
    foot.remove();
    createContainer(globalInput);
    createGrid(globalInput);
}





