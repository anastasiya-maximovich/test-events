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
