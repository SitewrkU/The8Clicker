const clicksEl = document.getElementById("clicks");
const crystalEl = document.getElementById("crystals");
const SScrystalEl = document.getElementById("SScrystals");
const heart = document.getElementById("heart");
const header = document.getElementById("HeaderH");
let ClickCount = 0;
let CrystalCount = 0;
let SSCrystalCount = 0;

let clickBonus = 1;
let autoBonus = 1;
let autoSpeed = 500;
let crystalSpeed = 10000;
let critChance = 0;
let AstraChance = 3; //3%

let soundAvaible = false;
let criticalAvaible = false;
let autoAvaible = false;
let autoCrystalAvaible = false;

let intervalId;
let intervalIdCr;
let clickSound;
document.addEventListener("DOMContentLoaded", () => {

    const upgrades = {
        1: {
            button: document.getElementById("upgrd-btn1"),
            priceElement: document.getElementById("upgrd-p1"),
            count: 0,
            price: 160,
            EvListener: true
        },
        2: {
            button: document.getElementById("upgrd-btn2"),
            priceElement: document.getElementById("upgrd-p2"),
            element: document.getElementById("upgrd2"),
            additionalElement: document.getElementById("upgrd3"),
            additionalElement2: document.getElementById("upgrd5"),
            count: 0,
            price: 2000,
            EvListener: true
        },
        3: {
            button: document.getElementById("upgrd-btn3"),
            priceElement: document.getElementById("upgrd-p3"),
            element: document.getElementById("upgrd3"),
            count: 0,
            price: 400,
            EvListener: true
        },
        4: {
            button: document.getElementById("upgrd-btn4"),
            priceElement: document.getElementById("upgrd-p4"),
            element: document.getElementById("upgrd4"),
            count: 0,
            price: 10000,
            EvListener: true
        },
        5: {
            button: document.getElementById("upgrd-btn5"),
            priceElement: document.getElementById("upgrd-p5"),
            element: document.getElementById("upgrd5"),
            additionalElement: document.getElementById("upgrd9"),
            count: 0,
            price: 25000,
            EvListener: true
        },
        6: {
            button: document.getElementById("upgrd-btn6"),
            priceElement: document.getElementById("upgrd-p6"),
            element: document.getElementById("upgrd6"),
            count: 0,
            price: 65000,
            EvListener: true
        },
        7: {
            button: document.getElementById("upgrd-btn7"),
            priceElement: document.getElementById("upgrd-p7"),
            element: document.getElementById("upgrd7"),
            count: 0,
            price: 77000,
            EvListener: true
        },
        8: {
            button: document.getElementById("upgrd-btn8"),
            priceElement: document.getElementById("upgrd-p8"),
            element: document.getElementById("upgrd8"),
            count: 0,
            price: 4000,
            EvListener: true
        },
        9: {
            button: document.getElementById("upgrd-btn9"),
            priceElement: document.getElementById("upgrd-p9"),
            element: document.getElementById("upgrd9"),
            count: 0,
            price: 80000,
            EvListener: true
        },
        10: {
            button: document.getElementById("upgrd-btnCrystl"),
            priceElement: document.getElementById("upgrd-pCrystl"),
            element: document.getElementById("upgrdCrystl"),
            additionalElement: document.getElementById("crystals"),
            additionalElementS: document.getElementById("SScrystals"),
            additionalElement2: document.getElementById("upgrdCrystl2"),
            count: 0,
            price: 40000,
            EvListener: true
        },
        11: {
            button: document.getElementById("upgrd-btnCrystl2"),
            priceElement: document.getElementById("upgrd-pCrystl2"),
            element: document.getElementById("upgrdCrystl2"),
            additionalElement: document.getElementById("upgrdSpeedCAuto"),
            additionalElement2: document.getElementById("upgrdChanceAstra"),
            count: 0,
            price: 15000,
            EvListener: true
        },
        12: {
            button: document.getElementById("upgrd-btnCrit"),
            priceElement: document.getElementById("upgrd-pCrit"),
            element: document.getElementById("upgrdCrit"),
            count: 0,
            price: 100,
            EvListener: true
        },
        13: {
            button: document.getElementById("upgrd-btnAutoSpeed"),
            priceElement: document.getElementById("upgrd-pAutoSpeed"),
            element: document.getElementById("upgrdAutoSpeed"),
            additionalElement: document.getElementById("upgrdAutoBonus"),
            count: 0,
            price: 220,
            EvListener: true
        },
        14: {
            button: document.getElementById("upgrd-btnClickSBonus"),
            priceElement: document.getElementById("upgrd-pClickSBonus"),
            element: document.getElementById("upgrdClickSBonus"),
            additionalElement: document.getElementById("upgrdClickSBonus2"),
            count: 0,
            price: 4,
            EvListener: true
        },
        15: {
            button: document.getElementById("upgrd-btntransform1"),
            priceElement: document.getElementById("upgrd-ptransform1"),
            element: document.getElementById("transform1"),
            EvListener: true
        },
        16: {
            button: document.getElementById("upgrd-btntransform2"),
            priceElement: document.getElementById("upgrd-ptransform2"),
            element: document.getElementById("transform2"),
            EvListener: true
        },
        17: {
            button: document.getElementById("upgrd-btnCHeartUPG"),
            priceElement: document.getElementById("upgrd-pCHeartUPG"),
            element: document.getElementById("CHeartUPG"),
            count: 0,
            price: 12,
            EvListener: true
        },
        18: {
            button: document.getElementById("upgrd-btnupgrdAutoBonus"),
            priceElement: document.getElementById("upgrd-pupgrdAutoBonus"),
            element: document.getElementById("upgrdAutoBonus"),
            additionalElement: document.getElementById("upgrdAutoBonusX2"),
            count: 0,
            price: 3,
            EvListener: true
        },
        19: {
            button: document.getElementById("upgrd-btnupgrdAutoBonusX2"),
            priceElement: document.getElementById("upgrd-pupgrdAutoBonusX2"),
            element: document.getElementById("upgrdAutoBonusX2"),
            additionalElement: document.getElementById("upgrdAutoBonusX2Num2"),
            count: 0,
            price: 5,
            EvListener: true
        },
        20: {
            button: document.getElementById("upgrd-btnupgrdSpeedCAuto"),
            priceElement: document.getElementById("upgrd-pupgrdSpeedCAuto"),
            element: document.getElementById("upgrdSpeedCAuto"),
            count: 0,
            price: 100000,
            EvListener: true
        },
        21: {
            button: document.getElementById("upgrd-btnClickSBonus2"),
            priceElement: document.getElementById("upgrd-pClickSBonus2"),
            element: document.getElementById("upgrdClickSBonus2"),
            additionalElement: document.getElementById("upgrdClickSBonus2Num2"),
            count: 0,
            price: 150000,
            EvListener: true
        },
        22: {
            button: document.getElementById("upgrd-btnChanceAstra"),
            priceElement: document.getElementById("upgrd-pChanceAstra"),
            element: document.getElementById("upgrdChanceAstra"),
            count: 0,
            price: 350,
            EvListener: true
        },
        23: {
            button: document.getElementById("upgrd-btnupgrdAutoBonusX2Num2"),
            priceElement: document.getElementById("upgrd-pupgrdAutoBonusX2Num2"),
            element: document.getElementById("upgrdAutoBonusX2Num2"),
            count: 0,
            price: 3,
            price2: 220,
            EvListener: true
        },
        24: {
            button: document.getElementById("upgrd-btnClickSBonus2Num2"),
            priceElement: document.getElementById("upgrd-pClickSBonus2Num2"),
            element: document.getElementById("upgrdClickSBonus2Num2"),
            count: 0,
            price: 250000,
            EvListener: true
        },



        0: {
            button: document.getElementById("upgrd-btnEnd"),
            priceElement: document.getElementById("upgrd-pEnd"),
            element: document.getElementById("upgrdEnd"),
            count: 0,
            price: 8888888,
            EvListener: true
        }
    };

    //Клік
    heart.addEventListener("click", () => {
        if (Math.random() < parseFloat(critChance.toFixed(2)) && criticalAvaible) {
            console.log("Crit!");
            console.log(parseFloat(critChance.toFixed(2)))
            ClickCount += clickBonus*3;
        }else{
            ClickCount += clickBonus; 
        }


        if(soundAvaible){
            clickSound.currentTime = 0;
            clickSound.play();
        }

        clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
    });



    
    //1Прокачка кліків
    function buyUpgradeHeart() {
        const upgrade = upgrades[1];
        if(ClickCount >= upgrade.price){
            upgrade.button.disabled = true;
            upgrade.count++;
            ClickCount -= upgrade.price;

            if(upgrade.count < 20){
                upgrade.price = Math.round(upgrade.price * 1.2);
            }else{
                upgrade.price = Math.round(upgrade.price * 1.08);
            }
            
            upgrade.priceElement.textContent = `[${upgrade.count}] Прокачати серце - [${upgrade.price}]`;


            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            clickBonus++;
            upgrade.button.disabled = false;
        }
    }



    //2АвтоФерма
    function buyUpgradeAuto() {
        const upgrade = upgrades[2];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            upgrade.count++;
            ClickCount -= upgrade.price; 
            autoAvaible = true;
            
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.additionalElement.style.display = "Block";
            upgrade.additionalElement2.style.display = "Block";

            if (intervalId) {
                clearInterval(intervalId);  // Зупиняємо попередній інтервал
            }

            intervalId = setInterval(() => {
                ClickCount += autoBonus; 
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
            }, autoSpeed); 
            

            upgrade.EvListener = false;
        }
    }

    //3Прокачка бонусу автоферми
    function buyUpgradeAutoBonus(){
        const upgrade = upgrades[3];

        if(ClickCount >= upgrade.price){
            upgrade.count++;
            ClickCount -= upgrade.price;

            if(upgrade.count < 10){
                upgrade.price = Math.round(upgrade.price * 1.3);
            }else{
                upgrade.price = Math.round(upgrade.price * 1.15);
            }
            
            upgrade.priceElement.textContent = `[${upgrade.count}] Прокачати автоферму - [${upgrade.price}]`;
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;

            autoBonus++;
            if(upgrade.count == 25){
                upgrade.button.disabled = true;
                upgrade.button.style.backgroundColor = "#474444";
                upgrade.button.style.cursor = "default";
                upgrade.element.style.backgroundColor = "#706b6b";
                upgrade.EvListener = false;
            }
        }
    }

    //4Супер кліки
    function buyUpgradeSuper() {
        const upgrade = upgrades[4];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            ClickCount -= upgrade.price; 
            clickBonus = clickBonus * 2;
            
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.EvListener = false;
        }
    }

    //5Швидкість автоферми
    function buyUpgradeSpeed() {
        const upgrade = upgrades[5];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            ClickCount -= upgrade.price; 
            autoSpeed -= 200;

            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.additionalElement.style.display = "Block";
            upgrade.EvListener = false;

            if (intervalId) {
                clearInterval(intervalId);  // Зупиняємо попередній інтервал
            }

            // Запуск нового інтервалу з новою швидкістю
            intervalId = setInterval(() => {
                ClickCount += autoBonus; 
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
            }, autoSpeed);
        }
    }

    //6Тема - Темна
    function buyUpgradeTheme() {
        const upgrade = upgrades[6];

        if(upgrade.count < 1){
            if (ClickCount >= upgrade.price) {
                upgrade.count++;
                ClickCount -= upgrade.price; 

                document.body.style.backgroundColor = "#181818";
                header.style.color = "white";
                clicksEl.style.color = "white";

                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
                upgrade.button.style.backgroundColor = "#474444";
                upgrade.element.style.backgroundColor = "#575757";
                upgrade.priceElement.style.color = "black";
                crystalEl.style.color = "white";
                SScrystalEl.style.color = "white";
                document.querySelectorAll('footer p, footer h2').forEach(element => {
                    element.style.color = 'white';
                });
                upgrade.button.textContent = "Перемкнути";
            }
        }else if(upgrade.count == 1){
            if(document.body.style.backgroundColor == "rgb(24, 24, 24)"){
                document.body.style.backgroundColor = "#ffaeb2";
                header.style.color = "black";
                clicksEl.style.color = "black";
                crystalEl.style.color = "black";
                SScrystalEl.style.color = "black";

                //блок інформації
                document.querySelectorAll('footer p, footer h2').forEach(element => {
                    element.style.color = 'black';
                });
            }else{
                document.body.style.backgroundColor = "#181818";
                header.style.color = "white";
                clicksEl.style.color = "white";
                crystalEl.style.color = "white";
                SScrystalEl.style.color = "white";

                //блок інформації
                document.querySelectorAll('footer p, footer h2').forEach(element => {
                    element.style.color = 'white';
                });
            }
        }
    }


    //7звуки
    function buyUpgradeMusic() {
        const upgrade = upgrades[7];
        if(upgrade.count < 1){
            if (ClickCount >= upgrade.price) {
                upgrade.count++;
                ClickCount -= upgrade.price; 
                soundAvaible = true;
                clickSound = new Audio("assets/audio/clickSound.wav");
                
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
                upgrade.button.style.backgroundColor = "#474444";
                upgrade.element.style.backgroundColor = "#575757";
                upgrade.priceElement.style.color = "black";
                upgrade.button.textContent = "Перемкнути";
            }

        }else if(soundAvaible == false){
            soundAvaible = true;
            clickSound = new Audio("assets/audio/clickSound.wav");
        }else if( clickSound.src.includes("assets/audio/clickSound.wav") ){
            soundAvaible = true;
            clickSound = new Audio("assets/audio/clickSound2.wav");
        }else if( clickSound.src.includes("assets/audio/clickSound2.wav") ){
            clickSound = new Audio("assets/audio/clickSound3.wav");
        }else if( clickSound.src.includes("assets/audio/clickSound3.wav") ){
            soundAvaible = false;
        }
    }

    //8Кріт шанс
    function buyUpgradeCrit() {
        const upgrade = upgrades[8];
        if(upgrade.count < 1){
            if (ClickCount >= upgrade.price) {
                upgrade.count++;
                ClickCount -= upgrade.price; 

                criticalAvaible = true;
                critChance += 0.1;

                upgrade.price = Math.round(upgrade.price * 2);
                upgrade.priceElement.textContent = `[${upgrade.count}] Збільшити шанс критичного кліку +5% - [${upgrade.price}]`;
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            }
        }else {
            if(ClickCount >= upgrade.price){
                upgrade.count++;
                ClickCount -= upgrade.price; 

                critChance += 0.05;
                upgrade.price = Math.round(upgrade.price * 1.6);
                upgrade.priceElement.textContent = `[${upgrade.count}] Збільшити шанс критичного кліку +5% - [${upgrade.price}]`;
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;

                if(upgrade.count == 7){
                    upgrade.button.disabled = true;
                    upgrade.button.style.backgroundColor = "#474444";
                    upgrade.button.style.cursor = "default";
                    upgrade.element.style.backgroundColor = "#706b6b";
                    upgrade.EvListener = false;
                }
            }
        }
    }

    //9швидкість автоферми 2
    function buyUpgradeSpeed2() {
        const upgrade = upgrades[9];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            ClickCount -= upgrade.price; 
            autoSpeed -= 100;

            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.EvListener = false;

            if (intervalId) {
                clearInterval(intervalId);  // Зупиняє попередній інтервал
            }

            // Запуск нового інтервалу з новою швидкістю
            intervalId = setInterval(() => {
                ClickCount += autoBonus; 
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
            }, autoSpeed);
        }
    }


    //10 автоферма кристалів
    function Crystal() {
        const upgrade = upgrades[10];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            upgrade.count++;
            ClickCount -= upgrade.price; 
            autoCrystalAvaible = true;
            
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
            crystalEl.textContent = `Кристали: ${CrystalCount}`; 


            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";

            upgrade.additionalElement.style.display = "Block";
            upgrade.additionalElementS.style.display = "Block";
            upgrade.additionalElement2.style.display = "Block";

            intervalIdCr = setInterval(() => {
                let randCrystal = Math.floor(Math.random() * 12) + 1;
                CrystalCount += randCrystal; 

                let randSScrystal = Math.floor(Math.random() * 100) + 1;
                if (randSScrystal <= AstraChance) {
                    SSCrystalCount++;
                }

                SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            }, crystalSpeed); 

            upgrade.EvListener = false;
        }
    }


    //11 Швидкість ферми кристалів
    function CrystalSpeed(){
        const upgrade = upgrades[11];

        if(ClickCount >= upgrade.price){
            upgrade.count++;
            ClickCount -= upgrade.price;

            upgrade.price = Math.round(upgrade.price * 1.5);
            upgrade.priceElement.textContent = `[${upgrade.count}] Прокачати ферму кристалів(-1.5сек) - [${upgrade.price}]`;
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            crystalSpeed -= 1500;

            if (intervalIdCr) {
                clearInterval(intervalIdCr); 
            }


            intervalIdCr = setInterval(() => {
                let randCrystal = Math.floor(Math.random() * 12) + 1;
                CrystalCount += randCrystal; 

                let randSScrystal = Math.floor(Math.random() * 100) + 1;
                if (randSScrystal <= AstraChance) {
                    SSCrystalCount++;
                }

                SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            }, crystalSpeed); 



            if(upgrade.count == 4){
                upgrade.button.disabled = true;
                upgrade.button.style.backgroundColor = "#474444";
                upgrade.button.style.cursor = "default";
                upgrade.element.style.backgroundColor = "#706b6b";
                upgrade.additionalElement.style.display = "block";
                upgrade.additionalElement2.style.display = "block";
                upgrade.EvListener = false;
            }
        }
    }
    


    //12 Кріт шанс +10 кристали
    function CrystalCrit() {
        const upgrade = upgrades[12];
        if(upgrade.count < 1){
            if (CrystalCount >= upgrade.price) {
                upgrade.count++;
                CrystalCount -= upgrade.price; 
                critChance += 0.1;

                crystalEl.textContent = `Кристали: ${CrystalCount}`; 

                upgrade.button.disabled = true;
                upgrade.button.style.backgroundColor = "#474444";
                upgrade.button.style.cursor = "default";
                upgrade.element.style.backgroundColor = "#706b6b";
                upgrade.EvListener = false;
            }
        }
    }


    //13 Швидкість автоферми -0.1с за кристали
    function CrystalAutoSpeed() {
        const upgrade = upgrades[13];

        if (CrystalCount >= upgrade.price) {
            upgrade.button.disabled = true;
            CrystalCount -= upgrade.price; 
            autoSpeed -= 100;

            crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.additionalElement.style.display = "block";
            upgrade.EvListener = false;

            if (intervalId) {
                clearInterval(intervalId);  // Зупиняє попередній інтервал
            }

            // Запуск нового інтервалу з новою швидкістю
            if(autoAvaible){ //Щоб не запускати автоферму якщо вона ще не куплена
                intervalId = setInterval(() => {
                    ClickCount += autoBonus; 
                    clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
                }, autoSpeed);
            }   
        }
    }


    function ClickSBonus() {
        const upgrade = upgrades[14];

        if (SSCrystalCount >= upgrade.price) {
            upgrade.button.disabled = true;
            SSCrystalCount -= upgrade.price; 
            clickBonus += 45;
            
            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.additionalElement.style.display = "block";
            upgrade.EvListener = false;
        }
    }

    //Трансофрм 1
    function transform1() {
        if (CrystalCount >= 30) {
            CrystalCount -= 30;
            ClickCount += 7000;

            crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
        }
    }
    function transform2() {
        if (SSCrystalCount >= 1) {
            SSCrystalCount -= 1;
            ClickCount += 50000;

            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
        }
    }



    function CUPGHeart() {
        const upgrade = upgrades[17];
        if(CrystalCount >= upgrade.price){
            upgrade.button.disabled = true;
            upgrade.count++;
            CrystalCount -= upgrade.price;

            if(upgrade.count < 10){
                upgrade.price = Math.round(upgrade.price * 1.2);
            }else if(upgrade.count < 20){
                upgrade.price = Math.round(upgrade.price * 1.08);
            }else{
                upgrade.price = Math.round(upgrade.price * 1.04);
            }
            
            upgrade.priceElement.textContent = `[${upgrade.count}] Прокачати серце 2(+1 бонус) [${upgrade.price} Кристалів]`;


            crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            clickBonus += 2;
            upgrade.button.disabled = false;
        }
    }

    //Авто бонус
    function upgrdAutoCBonus() {
        const upgrade = upgrades[18];

        if (SSCrystalCount >= upgrade.price) {
            upgrade.button.disabled = true;
            SSCrystalCount -= upgrade.price; 
            autoBonus += 20;
            
            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.additionalElement.style.display = "block";
            upgrade.EvListener = false;
        }
    }

    // Авто бонус х2.5
    function upgrdAutoCBonusX2() {
        const upgrade = upgrades[19];

        if (SSCrystalCount >= upgrade.price) {
            upgrade.button.disabled = true;
            SSCrystalCount -= upgrade.price; 
            autoBonus *= 2.5;
            
            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.additionalElement.style.display = "block";
            upgrade.EvListener = false;
        }
    }


    //швидкість автофемри кристалів, ласт
    function upgrdSpeedCAuto(){
        const upgrade = upgrades[20];

        if(ClickCount >= upgrade.price){
            upgrade.count++;
            ClickCount -= upgrade.price;

            crystalSpeed -= 2000;

            if (intervalIdCr) {
                clearInterval(intervalIdCr); 
            }


            intervalIdCr = setInterval(() => {
                let randCrystal = Math.floor(Math.random() * 12) + 1;
                CrystalCount += randCrystal; 

                let randSScrystal = Math.floor(Math.random() * 100) + 1;
                if (randSScrystal <= AstraChance) {
                    SSCrystalCount++;
                    console.log(AstraChance)
                }

                SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            }, crystalSpeed); 

            upgrade.button.disabled = true;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.EvListener = false;
        }
    }


    function upgrdClickSBonus2() {
        const upgrade = upgrades[21];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            ClickCount -= upgrade.price; 
            clickBonus = clickBonus * 2.5;
            
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.additionalElement.style.display = "block";
            upgrade.EvListener = false;
        }
    }

    function upgrdChanceAstra() {
        const upgrade = upgrades[22];
        if (CrystalCount >= upgrade.price) {
            upgrade.count++;
            CrystalCount -= upgrade.price; 
            AstraChance += 2;

            crystalEl.textContent = `Кристали: ${CrystalCount}`; 

            upgrade.button.disabled = true;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.EvListener = false;
        }
    }

    function upgrdAutoBonusX2Num2() {
        const upgrade = upgrades[23];

        if (SSCrystalCount >= upgrade.price && CrystalCount >= upgrade.price2) {
            upgrade.button.disabled = true;
            SSCrystalCount -= upgrade.price; 
            CrystalCount -= upgrade.price2;

            autoBonus *= 2.2;
            
            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`;
            crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.EvListener = false;
        }
    }


    function upgrdClickSBonus2Num2() {
        const upgrade = upgrades[24];

        if (ClickCount >= upgrade.price) {
            upgrade.button.disabled = true;
            ClickCount -= upgrade.price; 
            clickBonus = clickBonus * 1.8;
            
            clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.priceElement.style.color = "black";
            upgrade.EvListener = false;
        }
    }




    function upgrdEnd() {
        const upgrade = upgrades[0];
        if (ClickCount >= upgrade.price) {
            window.location.href = window.location.origin + (window.location.origin.includes('github.io') ? '/The8Clicker' : '') + '/EndScreen/End.html'; // Перенаправлення на нову сторінку
        }
    }


    function loadFromLocalStorage() {
        console.log("LOADING DATA:")
        ClickCount = Number(localStorage.getItem("ClickCount")) || 0;
        CrystalCount = Number(localStorage.getItem("CrystalCount")) || 0;
        SSCrystalCount = Number(localStorage.getItem("SSCrystalCount")) || 0;
        
        clickBonus = Number(localStorage.getItem("clickBonus")) || 1;
        autoBonus = Number(localStorage.getItem("autoBonus")) || 1;
        autoSpeed = Number(localStorage.getItem("autoSpeed")) || 500;
        crystalSpeed = Number(localStorage.getItem("crystalSpeed")) || 10000;
        critChance = Number(localStorage.getItem("critChance")) || 0;
        AstraChance = Number(localStorage.getItem("AstraChance")) || 3;
    
        soundAvaible = localStorage.getItem("soundAvaible") === "true";
        criticalAvaible = localStorage.getItem("criticalAvaible") === "true";
        autoAvaible = localStorage.getItem("autoAvaible") === "true";
        autoCrystalAvaible = localStorage.getItem("autoCrystalAvaible") === "true";

        clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 

        if(autoCrystalAvaible){
            crystalEl.style.display = "block";
            SScrystalEl.style.display = "block";
            SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
        }

        if(soundAvaible){
            clickSound = new Audio("assets/audio/clickSound.wav");
        }

        console.log("Variables loaded")

        const savedUpgrades = JSON.parse(localStorage.getItem("upgrades")) || {};

        for (let key in upgrades) {
            if (savedUpgrades[key]) {
                upgrades[key].count = savedUpgrades[key].count || 0;
    
                if (savedUpgrades[key].buttonStyles && upgrades[key].button) {
                    upgrades[key].button.style.backgroundColor = savedUpgrades[key].buttonStyles.backgroundColor || "";
                    upgrades[key].button.style.color = savedUpgrades[key].buttonStyles.color || "";
                    upgrades[key].button.textContent = savedUpgrades[key].buttonStyles.textContent || "";
                }
    
                if (savedUpgrades[key].priceStyles && upgrades[key].priceElement) {
                    upgrades[key].priceElement.style.backgroundColor = savedUpgrades[key].priceStyles.backgroundColor || "";
                    upgrades[key].priceElement.style.color = savedUpgrades[key].priceStyles.color || "";
                    upgrades[key].priceElement.textContent = savedUpgrades[key].priceStyles.textContent || "";
                }
    
                if (savedUpgrades[key].ElementStyles && upgrades[key].element) {
                    upgrades[key].element.style.backgroundColor = savedUpgrades[key].ElementStyles.backgroundColor || "";
                    upgrades[key].element.style.display = savedUpgrades[key].ElementStyles.display || "";
                }

                upgrades[key].EvListener = savedUpgrades[key].EvListener !== undefined ? savedUpgrades[key].EvListener : true;
            
                // Якщо EvListener === true, додаємо обробник подій
                if (upgrades[key].EvListener) {
                    addEventListenerToUpgrade(key);
                }


            }
        }



        for (let key in upgrades) {
            if (upgrades[key].button) {
                upgrades[key].button.style.cursor = upgrades[key].EvListener ? "pointer" : "default";
                console.log("Cursor loaded")
            }
        }

        if(autoAvaible){
            if (intervalId) {
                clearInterval(intervalId); 
            }
            //Запуск автоферми
            intervalId = setInterval(() => {
                ClickCount += autoBonus; 
                clicksEl.textContent = `Кліки: ${Math.floor(ClickCount)}`; 
            }, autoSpeed);
            console.log("AutoFarm Loaded")
        }

        if(autoCrystalAvaible){
            if (intervalIdCr) {
                clearInterval(intervalIdCr); 
            }

            intervalIdCr = setInterval(() => {
                let randCrystal = Math.floor(Math.random() * 12) + 1;
                CrystalCount += randCrystal; 

                let randSScrystal = Math.floor(Math.random() * 100) + 1;
                if (randSScrystal <= AstraChance) {
                    SSCrystalCount++;
                }

                SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            }, crystalSpeed); 

            console.log("CrystalAutoFarm Loaded")
        }




        console.log("Data loaded!");
    }






    function addEventListenerToUpgrade(key) {
        if (upgrades[key] && upgrades[key].button) {
            switch (key) {
                case "0": upgrades[key].button.addEventListener("click", upgrdEnd); break;
                case "1": upgrades[key].button.addEventListener("click", buyUpgradeHeart); break;
                case "2": upgrades[key].button.addEventListener("click", buyUpgradeAuto); break;
                case "3": upgrades[key].button.addEventListener("click", buyUpgradeAutoBonus); break;
                case "4": upgrades[key].button.addEventListener("click", buyUpgradeSuper); break;
                case "5": upgrades[key].button.addEventListener("click", buyUpgradeSpeed); break;
                case "6": upgrades[key].button.addEventListener("click", buyUpgradeTheme); break;
                case "7": upgrades[key].button.addEventListener("click", buyUpgradeMusic); break;
                case "8": upgrades[key].button.addEventListener("click", buyUpgradeCrit); break;
                case "9": upgrades[key].button.addEventListener("click", buyUpgradeSpeed2); break;
                case "10": upgrades[key].button.addEventListener("click", Crystal); break;
                case "11": upgrades[key].button.addEventListener("click", CrystalSpeed); break;
                case "12": upgrades[key].button.addEventListener("click", CrystalCrit); break;
                case "13": upgrades[key].button.addEventListener("click", CrystalAutoSpeed); break;
                case "14": upgrades[key].button.addEventListener("click", ClickSBonus); break;
                case "15": upgrades[key].button.addEventListener("click", transform1); break;
                case "16": upgrades[key].button.addEventListener("click", transform2); break;
                case "17": upgrades[key].button.addEventListener("click", CUPGHeart); break;
                case "18": upgrades[key].button.addEventListener("click", upgrdAutoCBonus); break;
                case "19": upgrades[key].button.addEventListener("click", upgrdAutoCBonusX2); break;
                case "20": upgrades[key].button.addEventListener("click", upgrdSpeedCAuto); break;
                case "21": upgrades[key].button.addEventListener("click", upgrdClickSBonus2); break;
                case "22": upgrades[key].button.addEventListener("click", upgrdChanceAstra); break;
                case "23": upgrades[key].button.addEventListener("click", upgrdAutoBonusX2Num2); break;
                case "24": upgrades[key].button.addEventListener("click", upgrdClickSBonus2Num2); break;
            }
        }
    }





    function saveToLocalStorage() {
        localStorage.setItem("ClickCount", ClickCount);
        localStorage.setItem("CrystalCount", CrystalCount);
        localStorage.setItem("SSCrystalCount", SSCrystalCount);
        
        localStorage.setItem("clickBonus", clickBonus);
        localStorage.setItem("autoBonus", autoBonus);
        localStorage.setItem("autoSpeed", autoSpeed);
        localStorage.setItem("crystalSpeed", crystalSpeed);
        localStorage.setItem("critChance", critChance);
        localStorage.setItem("AstraChance", AstraChance);
    
        localStorage.setItem("soundAvaible", soundAvaible);
        localStorage.setItem("criticalAvaible", criticalAvaible);
        localStorage.setItem("autoAvaible", autoAvaible);
        localStorage.setItem("autoCrystalAvaible", autoCrystalAvaible);

        let saveData = {};

        for (let key in upgrades) {
            saveData[key] = {
                count: upgrades[key].count,
                EvListener: upgrades[key].EvListener,
    
                buttonStyles: {
                    backgroundColor: upgrades[key].button?.style.backgroundColor || "",
                    color: upgrades[key].button?.style.color || "",
                    textContent: upgrades[key].button.textContent || ""
                },
    
                priceStyles: {
                    backgroundColor: upgrades[key].priceElement?.style.backgroundColor || "",
                    color: upgrades[key].priceElement?.style.color || "",
                    textContent: upgrades[key].priceElement.textContent || ""
                }
            };
    
            // Перевіряємо, чи існує `element`, перш ніж зберігати його стилі
            if (upgrades[key].element) {
                saveData[key].ElementStyles = {
                    backgroundColor: upgrades[key].element.style.backgroundColor || "",
                    display: upgrades[key].element.style.display || ""
                };
            }
        }

        localStorage.setItem("upgrades", JSON.stringify(saveData));
        console.log("Data saved!")
    }





    document.getElementById("Reset-btn").addEventListener("click", function() {
        localStorage.clear();
        window.location.href = window.location.href;
    });


    if (!localStorage.getItem("upgrades")) {
        saveToLocalStorage();
    }else{
        console.log("Data already exists!")
    }

    loadFromLocalStorage();
    setInterval(() => {
        saveToLocalStorage();
    }, 30000);
});
export {clickBonus, autoBonus, autoSpeed, critChance, criticalAvaible, crystalSpeed};
