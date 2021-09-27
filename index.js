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


