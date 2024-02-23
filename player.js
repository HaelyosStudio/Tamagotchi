import { Tamagotchi } from "./tamagotchi.js";
console.log('player file is loaded');

class Player {
    name;
    constructor(name) {
        this.name = name;
    }

    feedTamagotchi(tamagotchi) {
        tamagotchi.foodValue++;
        if (tamagotchi.foodValue > 10 && tamagotchi.type !== 'GOD') {
            tamagotchi.foodValue = 10;
            document.getElementById('hungerHolder').innerText = 'Hunger : ' + tamagotchi.foodValue;
            console.log(this.name + ' fed ' + tamagotchi.name + ' | Current hunger : ' + tamagotchi.foodValue);
            console.log('');
        } else if (tamagotchi.foodValue > 100 && tamagotchi.type === 'GOD') {
            tamagotchi.foodValue = 100;
            document.getElementById('hungerHolder').innerText = 'Hunger : ' + tamagotchi.foodValue;
            console.log(this.name + ' fed ' + tamagotchi.name + ' | Current hunger : ' + tamagotchi.foodValue);
            console.log('');
        } else {
            document.getElementById('hungerHolder').innerText = 'Hunger : ' + tamagotchi.foodValue;
            console.log(this.name + ' fed ' + tamagotchi.name + ' | Current hunger : ' + tamagotchi.foodValue);
            console.log('');
        }
    }

    medicateTamagotchi(tamagotchi) {
        tamagotchi.healthValue++;
        if (tamagotchi.healthValue > 10) {
            tamagotchi.healthValue = 10;
            document.getElementById('healthHolder').innerText = 'Health : ' + tamagotchi.healthValue;
            console.log(this.name + ' heals ' + tamagotchi.name + ' | Current health : ' + maxHealthValue);
            console.log();
        } else if (tamagotchi.healthValue > 100 && tamagotchi.type === 'GOD') {
            tamagotchi.healthValue = 100;
            document.getElementById('healthHolder').innerText = 'Health : ' + tamagotchi.healthValue;
            console.log(this.name + ' heals ' + tamagotchi.name + ' | Current health : ' + tamagotchi.healthValue);
            console.log('');
        } else {
            document.getElementById('healthHolder').innerText = 'Health : ' + tamagotchi.healthValue;
            console.log(this.name + ' heals ' + tamagotchi.name + ' | Current health : ' + tamagotchi.healthValue);
            console.log();
        }
    }

    knockOutTamagotchi(tamagotchi) {
        tamagotchi.fatigueValue++;
        if (tamagotchi.fatigueValue > 10) {
            tamagotchi.fatigueValue = 10;
            document.getElementById('fatigueHolder').innerText = 'Fatigue : ' + tamagotchi.fatigueValue;
            console.log(this.name + ' puts ' + tamagotchi.name + ' to sleep.' + ' | Current fatigue : ' + tamagotchi.fatigueValue);
            console.log();
        } else if (tamagotchi.fatigueValue > 100 && tamagotchi.type === 'GOD') {
            tamagotchi.fatigueValue = 100;
            document.getElementById('fatigueHolder').innerText = 'Fatigue : ' + tamagotchi.fatigueValue;
            console.log(this.name + ' puts ' + tamagotchi.name + ' to sleep.' + ' | Current fatigue : ' + tamagotchi.fatigueValue);
            console.log('');
        } else {
            document.getElementById('fatigueHolder').innerText = 'Fatigue : ' + tamagotchi.fatigueValue;
            console.log(this.name + ' puts ' + tamagotchi.name + ' to sleep.' + ' | Current fatigue : ' + tamagotchi.fatigueValue);
            console.log();
        }
    }
}

const myPlayer = new Player('Hanyun');

let currentTamagotchi;

document.getElementById('submitButton').addEventListener('click', function() {
    const nameValue = document.getElementById('nameInput').value;
    const typeValue = document.getElementById('typeInput').value;

    const nameHolder = document.getElementById('nameHolder');
    const typeHolder = document.getElementById('typeHolder');

    nameHolder.innerText = 'Name : ' + nameValue;
    typeHolder.innerText = 'Type : ' + typeValue;

    if (typeValue === 'GOD') {
        currentTamagotchi = createTamagotchi(nameValue, typeValue);
        currentTamagotchi.foodValue = 100;
        currentTamagotchi.healthValue = 100;
        currentTamagotchi.fatigueValue = 100;

        document.getElementById('hungerHolder').innerText = 'Hunger : 100';
        document.getElementById('fatigueHolder').innerText = 'Fatigue : 100';
        document.getElementById('healthHolder').innerText = 'Health : 100';
    } else {
        currentTamagotchi = createTamagotchi(nameValue, typeValue);
    }
    
    alert('Tamagotchi created !');
})

function createTamagotchi(name, type) {
    const tamagotchi = new Tamagotchi(name, type);
    return tamagotchi;
}


document.getElementById('feedButton').addEventListener('click', function() {
    if (currentTamagotchi) {
        myPlayer.feedTamagotchi(currentTamagotchi);
    } else {
        alert("You need to create a Tamagotchi first!");
    }
})

document.getElementById('restButton').addEventListener('click', function() {
    if (currentTamagotchi) {
        myPlayer.knockOutTamagotchi(currentTamagotchi);
    } else {
        alert("You need to create a Tamagotchi first!");
    }
})

document.getElementById('medicateButton').addEventListener('click', function() {
    if (currentTamagotchi) {
        myPlayer.medicateTamagotchi(currentTamagotchi);
    } else {
        alert("You need to create a Tamagotchi first!");
    }
})

document.getElementById('startButton').addEventListener('click', function() {
    if (currentTamagotchi) {
        currentTamagotchi.start();
    } else {
        alert("You need to create a Tamagotchi first!");
    }
})

document.getElementById('stopButton').addEventListener('click', function() {
    if (currentTamagotchi) {
        currentTamagotchi.stop();
    } else {
        alert("You need to create a Tamagotchi first!");
    }
})

//console.log(myPlayer.feedTamagotchi(myTamagotchi));