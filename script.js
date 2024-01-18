const container = document.querySelector("#container");
const gridSquares = [];

for (let y = 0; y < 16; y++) {
    const ydiv = document.createElement("div");
    ydiv.id = `y${y}`;
    ydiv.classList.add("row");
    container.appendChild(ydiv);

    for (let x = 0; x < 16; x++) {
        const xdiv = document.createElement("div");
        xdiv.id = `x${x}`;
        xdiv.classList.add("gridSquare");
        ydiv.appendChild(xdiv);
        gridSquares.push(xdiv);
    }
}

gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseenter", event => {
        gridSquare.style.backgroundColor = "black";
    });
});