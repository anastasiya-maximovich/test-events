/* Task1 --- Задание:
Сделайте так, чтобы при нажатии на клавишу G фон div#colorOutput становился зеленым.
при нажатии на клавишу R фон div#colorOutput становился красным, 
а при нажатии на клавишу B фон div#colorOutput становился синим.
*/

let div = document.querySelector('#colorOutput');

document.addEventListener('keydown', changeColor);

function changeColor(e){
    if(e.key === 'g'){
        div.style.backgroundColor = 'green';
    }else if(e.key === 'r'){
        div.style.backgroundColor = 'red';
    }else if(e.key === 'b'){
        div.style.backgroundColor = 'blue';
    }
}

 /* Task2 -- Задание:
    Не изменяя расположения элемента script, исправьте ошибку сценария.
    При загрузке данного сценария на странице должно отобразиться сообщение Hello world

    script --- document.querySelector("#output").textContent = "Hello world"; --- расположен в head
    */


/* Task3 -- Задание:
    Реализуйте сценарий, который при нажатии на клавиши 1, 2 или 3 на клавиатуре будет добавлять рамку
    красного цвета на соответствующий div. Если зажаты клавиши Ctrl + A, то красная рамка добавляется сразу
    для всех div
*/

let boxes = document.querySelectorAll('.boxes div');

document.addEventListener('keydown', addBorder);

function addBorder(e){
    console.log(e);
    if(e.key === '1'){
        boxes[0].classList.add('divBorder');
        boxes[1].classList.remove('divBorder');
        boxes[2].classList.remove('divBorder');
    }else if(e.key === '2'){
        boxes[1].classList.toggle('divBorder');
        boxes[0].classList.remove('divBorder');
        boxes[2].classList.remove('divBorder');
    }else if(e.key === '3'){
        boxes[2].classList.toggle('divBorder');
        boxes[1].classList.remove('divBorder');
        boxes[0].classList.remove('divBorder');
    }else if(e.key === 'A' && e.shiftKey === true){
        boxes.forEach(box => {
            box.classList.add('divBorder');
        })
    }
}
