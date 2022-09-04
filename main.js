const container = document.querySelector(".container");
for(let i=0; i<16; i++){
    const gridContainer = document.createElement("div");
    gridContainer.style.display = "flex";
    for(let j=0; j<16; j++){
        const gridElement = document.createElement("div");
        gridElement.style.height = "16px";
        gridElement.style.width = "16px";
        gridElement.style.borderStyle = "groove";
        gridElement.style.borderWidth = "1px";
        gridElement.style.borderColor = "black";
        gridContainer.append(gridElement);
        
    }
    container.append(gridContainer);
}