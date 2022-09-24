const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");

window.onload = ()=> {
    selectXBtn.onclick = ()=> {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
}