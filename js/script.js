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

let soundAvaible = false;
let criticalAvaible = false;
let autoAvaible = false;

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
        },
        2: {
            button: document.getElementById("upgrd-btn2"),
            priceElement: document.getElementById("upgrd-p2"),
            element: document.getElementById("upgrd2"),
            additionalElement: document.getElementById("upgrd3"),
            additionalElement2: document.getElementById("upgrd5"),
            count: 0,
            price: 2000,
        },
        3: {
            button: document.getElementById("upgrd-btn3"),
            priceElement: document.getElementById("upgrd-p3"),
            element: document.getElementById("upgrd3"),
            count: 0,
            price: 400,
        },
        4: {
            button: document.getElementById("upgrd-btn4"),
            priceElement: document.getElementById("upgrd-p4"),
            element: document.getElementById("upgrd4"),
            count: 0,
            price: 10000,
        },
        5: {
            button: document.getElementById("upgrd-btn5"),
            priceElement: document.getElementById("upgrd-p5"),
            element: document.getElementById("upgrd5"),
            additionalElement: document.getElementById("upgrd9"),
            count: 0,
            price: 25000,
        },
        6: {
            button: document.getElementById("upgrd-btn6"),
            priceElement: document.getElementById("upgrd-p6"),
            element: document.getElementById("upgrd6"),
            count: 0,
            price: 65000,
        },
        7: {
            button: document.getElementById("upgrd-btn7"),
            priceElement: document.getElementById("upgrd-p7"),
            element: document.getElementById("upgrd7"),
            count: 0,
            price: 77000,
        },
        8: {
            button: document.getElementById("upgrd-btn8"),
            priceElement: document.getElementById("upgrd-p8"),
            element: document.getElementById("upgrd8"),
            count: 0,
            price: 4000,
        },
        9: {
            button: document.getElementById("upgrd-btn9"),
            priceElement: document.getElementById("upgrd-p9"),
            element: document.getElementById("upgrd9"),
            count: 0,
            price: 80000,
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
        },
        11: {
            button: document.getElementById("upgrd-btnCrystl2"),
            priceElement: document.getElementById("upgrd-pCrystl2"),
            element: document.getElementById("upgrdCrystl2"),
            additionalElement: document.getElementById("upgrdSpeedCAuto"),
            count: 0,
            price: 15000,
        },
        12: {
            button: document.getElementById("upgrd-btnCrit"),
            priceElement: document.getElementById("upgrd-pCrit"),
            element: document.getElementById("upgrdCrit"),
            count: 0,
            price: 100,
        },
        13: {
            button: document.getElementById("upgrd-btnAutoSpeed"),
            priceElement: document.getElementById("upgrd-pAutoSpeed"),
            element: document.getElementById("upgrdAutoSpeed"),
            additionalElement: document.getElementById("upgrdAutoBonus"),
            count: 0,
            price: 220,
        },
        14: {
            button: document.getElementById("upgrd-btnClickSBonus"),
            priceElement: document.getElementById("upgrd-pClickSBonus"),
            element: document.getElementById("upgrdClickSBonus"),
            additionalElement: document.getElementById("upgrdClickSBonus2"),
            count: 0,
            price: 4,
        },
        15: {
            button: document.getElementById("upgrd-btntransform1"),
            priceElement: document.getElementById("upgrd-ptransform1"),
            element: document.getElementById("transform1"),
        },
        16: {
            button: document.getElementById("upgrd-btntransform2"),
            priceElement: document.getElementById("upgrd-ptransform2"),
            element: document.getElementById("transform2"),
        },
        17: {
            button: document.getElementById("upgrd-btnCHeartUPG"),
            priceElement: document.getElementById("upgrd-pCHeartUPG"),
            element: document.getElementById("CHeartUPG"),
            count: 0,
            price: 12,
        },
        18: {
            button: document.getElementById("upgrd-btnupgrdAutoBonus"),
            priceElement: document.getElementById("upgrd-pupgrdAutoBonus"),
            element: document.getElementById("upgrdAutoBonus"),
            additionalElement: document.getElementById("upgrdAutoBonusX2"),
            count: 0,
            price: 3,
        },
        19: {
            button: document.getElementById("upgrd-btnupgrdAutoBonusX2"),
            priceElement: document.getElementById("upgrd-pupgrdAutoBonusX2"),
            element: document.getElementById("upgrdAutoBonusX2"),
            count: 0,
            price: 5,
        },
        20: {
            button: document.getElementById("upgrd-btnupgrdSpeedCAuto"),
            priceElement: document.getElementById("upgrd-pupgrdSpeedCAuto"),
            element: document.getElementById("upgrdSpeedCAuto"),
            count: 0,
            price: 100000,
        },
        21: {
            button: document.getElementById("upgrd-btnClickSBonus2"),
            priceElement: document.getElementById("upgrd-pClickSBonus2"),
            element: document.getElementById("upgrdClickSBonus2"),
            count: 0,
            price: 150000,
        },



        0: {
            button: document.getElementById("upgrd-btnEnd"),
            priceElement: document.getElementById("upgrd-pEnd"),
            element: document.getElementById("upgrdEnd"),
            count: 0,
            price: 8888888,
        },
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
            

            upgrade.button.removeEventListener("click", buyUpgradeAuto);
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
            if(upgrade.count == 20){
                upgrade.button.disabled = true;
                upgrade.button.style.backgroundColor = "#474444";
                upgrade.button.style.cursor = "default";
                upgrade.element.style.backgroundColor = "#706b6b";
                upgrade.button.removeEventListener("click", buyUpgradeAutoBonus);
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
            upgrade.button.removeEventListener("click", buyUpgradeSuper);
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
            upgrade.button.removeEventListener("click", buyUpgradeSpeed);

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
            console.log("else")
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
                    upgrade.button.removeEventListener("click", buyUpgradeCrit);
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
            upgrade.button.removeEventListener("click", buyUpgradeSpeed2);

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
                if (randSScrystal <= 3) {
                    SSCrystalCount++;
                }

                SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            }, crystalSpeed); 

            upgrade.button.removeEventListener("click", buyUpgradeAuto);
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
                if (randSScrystal <= 3) {
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
                upgrade.button.removeEventListener("click", CrystalSpeed);
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
                upgrade.button.removeEventListener("click", CrystalCrit);
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
            upgrade.button.removeEventListener("click", CrystalAutoSpeed);

            if (intervalId) {
                clearInterval(intervalId);  // Зупиняє попередній інтервал
            }

            // Запуск нового інтервалу з новою швидкістю
            if(autoAvaible){
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
            upgrade.button.removeEventListener("click", ClickSBonus);
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
            upgrade.button.removeEventListener("click", upgrdAutoCBonus);
        }
    }


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
            upgrade.button.removeEventListener("click", upgrdAutoCBonusX2);
        }
    }



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
                if (randSScrystal <= 3) {
                    SSCrystalCount++;
                }

                SScrystalEl.textContent = `Астраліт: ${SSCrystalCount}`; 
                crystalEl.textContent = `Кристали: ${CrystalCount}`; 
            }, crystalSpeed); 

            upgrade.button.disabled = true;
            upgrade.button.style.backgroundColor = "#474444";
            upgrade.button.style.cursor = "default";
            upgrade.element.style.backgroundColor = "#706b6b";
            upgrade.button.removeEventListener("click", upgrdSpeedCAuto);
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
            upgrade.button.removeEventListener("click", upgrdClickSBonus2);
        }
    }


    function upgrdEnd() {
        const upgrade = upgrades[0];
        if (ClickCount >= upgrade.price) {
            window.location.href = '../EndScreen/End.html';  // Перенаправлення на нову сторінку
        }
    }


    upgrades[0].button.addEventListener("click", upgrdEnd);
    upgrades[1].button.addEventListener("click", buyUpgradeHeart);
    upgrades[2].button.addEventListener("click", buyUpgradeAuto);
    upgrades[3].button.addEventListener("click", buyUpgradeAutoBonus);
    upgrades[4].button.addEventListener("click", buyUpgradeSuper);
    upgrades[5].button.addEventListener("click", buyUpgradeSpeed);
    upgrades[6].button.addEventListener("click", buyUpgradeTheme);
    upgrades[7].button.addEventListener("click", buyUpgradeMusic);
    upgrades[8].button.addEventListener("click", buyUpgradeCrit);
    upgrades[9].button.addEventListener("click", buyUpgradeSpeed2);
    upgrades[10].button.addEventListener("click", Crystal);
    upgrades[11].button.addEventListener("click", CrystalSpeed);
    upgrades[12].button.addEventListener("click", CrystalCrit);
    upgrades[13].button.addEventListener("click", CrystalAutoSpeed);
    upgrades[14].button.addEventListener("click", ClickSBonus);
    upgrades[15].button.addEventListener("click", transform1);
    upgrades[16].button.addEventListener("click", transform2);
    upgrades[17].button.addEventListener("click", CUPGHeart);
    upgrades[18].button.addEventListener("click", upgrdAutoCBonus);
    upgrades[19].button.addEventListener("click", upgrdAutoCBonusX2);
    upgrades[20].button.addEventListener("click", upgrdSpeedCAuto);
    upgrades[21].button.addEventListener("click", upgrdClickSBonus2);
});
export { clickBonus, autoBonus, autoSpeed, critChance, criticalAvaible, crystalSpeed };