import { clickBonus, autoBonus, autoSpeed, critChance, criticalAvaible, crystalSpeed } from "./script.js";
const ReloadBtn = document.getElementById("reloadbtn");
const checkbox = document.getElementById('GreyCheckBox');

let UpgradeElements = document.querySelectorAll('.upgradeEL');


const elements = {
    clickBonusX: document.querySelector('#click-bonusX'),
    autoBonusX: document.querySelector('#auto-bonusX'),
    autoCpsX: document.querySelector('#auto-cpsX'),
    autoSpeedX: document.querySelector('#auto-speedX'),
    criticalX: document.querySelector('#criticalX'),
    criticalBonusX: document.querySelector('#crit-bonusX'),
    critChanceX: document.querySelector('#crit-chanceX'),
    crstlSpeedX: document.querySelector('#crstl-speedX'),
    timeSpent: document.querySelector('#time-spent')
};


document.addEventListener("DOMContentLoaded", () => {

    function ImportInfo(){
        elements.clickBonusX.textContent = `Бонус кліку: ${clickBonus}`;
        elements.autoBonusX.textContent = `Бонус автоферми: ${autoBonus.toFixed(0)}`;

        let clicksPerSecond = (1000 / autoSpeed) * autoBonus;
        elements.autoCpsX.textContent = `Кількість автоферми кліків/с: ${clicksPerSecond.toFixed(1)}/с`;

        elements.autoSpeedX.textContent = `Швидкість автоферми: ${autoSpeed/1000}`;

        if(criticalAvaible){
            elements.criticalX.textContent = 'Критичний клік: Так';
        }else{
            elements.criticalX.textContent = 'Критичний клік: Ні';
        }

        elements.criticalBonusX.textContent = `Бонус критичного кліку(x3): ${clickBonus*3}`;
        elements.critChanceX.textContent = `Шанс критичного кліку: ${(critChance*100).toFixed(0)}%`
        elements.crstlSpeedX.textContent = `Швидкість ферми кристалів: ${crystalSpeed/1000}`;
    }




    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            UpgradeElements.forEach(Uelement => {
                let style = window.getComputedStyle(Uelement);  // Отримуємо обчислений стиль елемента
                let backgroundColor = style.backgroundColor;  // Отримуємо колір фону
        
                if (backgroundColor === 'rgb(112, 107, 107)') {
                    Uelement.style.display = 'none';  // Сховати елемент
                }
            });


        } else {
            UpgradeElements.forEach(Uelement => {
                let style = window.getComputedStyle(Uelement);
                let backgroundColor = style.backgroundColor;
                if (backgroundColor === 'rgb(112, 107, 107)') {
                    Uelement.style.display = 'block';
                }
            });
        }
    });


    let timeSpent = 0; // Лічильник часу

    function updateTime() {
        timeSpent++;
        let minutes = Math.floor(timeSpent / 60); 
        let seconds = timeSpent % 60;            
        elements.timeSpent.textContent = `Час на сайті: ${minutes} хвилин ${seconds} секунд`;
    }
    setInterval(updateTime, 1000);


    ReloadBtn.addEventListener("click", ImportInfo);
});