 /*Task 4 --- Задание:
Внесите изменения в сценарий. Сделайте чтобы при зажатой клавише Shift и нажатии стрелок на 
клавиатуре элемент по странице двигался в два раза быстрей, чем если просто нажимать на стрелки.
*/
let div = document.querySelector("#element");
let distance = 10;

document.addEventListener("keydown", function (e) {
    let moveFast = distance;
    if(e.shiftKey) moveFast *= 2;
    switch (e.code) {
        case "ArrowLeft":
            moveLeft(div, moveFast);
            break;
        case "ArrowRight":
            moveRight(div, moveFast);
            break;
        case "ArrowUp":
            moveUp(div, moveFast);
            break;
        case "ArrowDown":
            moveDown(div, moveFast);
            break;
    }
});

function moveUp(element, distance) {
    let top = getComputedStyle(element).top;
    element.style.top = parseInt(top) - distance + "px";
}

function moveDown(element, distance) {
    let top = getComputedStyle(element).top;
    element.style.top = parseInt(top) + distance + "px";
}

function moveLeft(element, distance) {
    let left = getComputedStyle(element).left;
    element.style.left = parseInt(left) - distance + "px";
}

function moveRight(element, distance) {
    let left = getComputedStyle(element).left;
    element.style.left = parseInt(left) + distance + "px";
}