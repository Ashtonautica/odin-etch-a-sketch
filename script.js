const container = document.querySelector("#gridContainer");
const gridSquares = [];
let gridSize = 16;

function constructNewGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let y = 0; y < gridSize; y++) {
        const row = document.createElement("div");
        row.id = `row${y}`;
        row.classList.add("row");
        container.appendChild(row);

        for (let x = 0; x < gridSize; x++) {
            const gridSquare = document.createElement("div");
            gridSquare.id = `gridSquare${x}`;
            gridSquare.classList.add("gridSquare");
            row.appendChild(gridSquare);
            gridSquares.push(gridSquare);
        }
    }

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseenter", event => {
            gridSquare.style.backgroundColor = "black";
        });
    });
}

const button = document.querySelector("button");
button.addEventListener("click", event => {
    gridSize = prompt("Please type in the desired number of squares per side of the square grid (maximum 100).", 16);
    if (gridSize > 100) {
        gridSize = 100
    };
    constructNewGrid();
})

constructNewGrid();