/* Task-1 Задание:
Добавьте для кнопки testBtn обработчик на событие click.
Обработчик должен выводить на экран сообщение Hello world.
Добавьте обработчик тремя разными способами.
*/

let btn2 = document.querySelector("#testBtn2");
let btn3 = document.querySelector("#testBtn3");


function showMassage() {
    alert("Hello world");
}

btn2.onclick = showMassage;

btn3.addEventListener("click", showMassage);

 /*
        Задание:
        Напишите сценарий, который вычисляет объем цилиндра по параметрам, которые вводит пользователь.
        Для расчета используйте формулу - V=π * r в квадрате * h
        Разместите на странице два поля ввода - первое для радиуса цилиндра, второе для высоты цилиндра.
        Объем цилиндра выведите в тело страницы.
        */

let inputRadius = document.querySelector("#radius");
let inputHight = document.querySelector("#hight");
let btnCilinder = document.querySelector(".btn__cilinder")

let value = 0;
function  countCilinder(){
    value = Math.PI * Math.pow(inputRadius.value, 2) * inputHight.value;
    
    document.querySelector(".output").textContent = value;
}

btnCilinder.addEventListener("click", countCilinder);

 /*
Task3: Задание:
Внесите правки в данный сценарий.
    Добавьте обработчик на клик по кнопке reset. При клике значения, введённые в поля ввода "Операнд 1"
    и "Операнд 2", должны быть заменены на значения 0
    Добавьте проверку перед выполнением любой арифметической операции. Если поле ввода пустое, сделайте
    для этого поля ввода красную рамку и сделайте видимый элемент с ошибкой под этим полем ввода.
    Для поля ввода input1 при отсутствии значения сделайте видимым span #input1Error для поля ввода
    input2 сделайте, в случае ошибки, #input2Error видимым.
    */

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let reset = document.querySelector("#reset-btn");

let addBtn = document.querySelector("#add-btn");
let remBtn = document.querySelector("#rem-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");


input1.value = 0;
input2.value = 0;

reset.addEventListener("click", colculate);

function colculate(btn){
    if(btn === addBtn){
        alert(Number(input1.value) + Number(input2.value));
    }else if(btn === remBtn){
        alert(input1.value - input2.value);
    }else if(btn === mulBtn){
        alert(input1.value * input2.value);
    }else(btn === divBtn){
        alert(input1.value / input2.value);
    }  
}
// addBtn.addEventListener("click", function () {
//     alert(Number(input1.value) + Number(input2.value));
// });

// remBtn.addEventListener("click", function () {
//     alert(input1.value - input2.value);
// });

// mulBtn.addEventListener("click", function () {
//     alert(input1.value * input2.value);
// });

// divBtn.addEventListener("click", function () {
//     alert(input1.value / input2.value);
// });


