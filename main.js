const container = document.querySelector(".container");
const cont = document.createElement("div");
container.classList.add("container");
container.style.width = "600px";
container.style.height = "600px";
const gridSize = document.querySelector("#sizeRange");
const dimNumber = document.querySelector(".dimNumber");

function createGrid(e) {
    container.replaceChildren();
    for (let i = 0; i < this.value; i++) {
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("gridContainer");
        gridContainer.style.display = "flex";
        for (let j = 0; j < this.value; j++) {
            const gridElement = document.createElement("div");
            gridElement.style.height = pixelSize(this.value);
            gridElement.style.width = pixelSize(this.value);
            gridElement.classList.add("gridElement");
            gridContainer.append(gridElement);
        }
        container.append(gridContainer);
    }
    const gridContainerArray = Array.from(document.querySelectorAll(".gridContainer"));    
    gridContainerArray.forEach(gridContainer => {
        gridElementArray = Array.from(document.querySelectorAll(".gridElement"));
        gridElementArray.forEach(gridElement => gridElement.addEventListener("mouseover", colorGrid));
    })
}

function pixelSize(gridSize) {
    let pixSize = 600 / (gridSize);   
    return `${pixSize}px`;
}


function colorGrid(e) {
    this.classList.add("gridChangeColor");
}

function showDimensionNumber(e){
    dimNumber.textContent = `${this.value} x ${this.value}`;
}
gridSize.addEventListener("mousemove", showDimensionNumber);
gridSize.addEventListener("mouseup", createGrid);