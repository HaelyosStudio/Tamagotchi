import { Tamagotchi, myTamagotchi, myTamagotchi2 } from "./tamagotchi.js";
console.log('player file is loaded');

class Player {
    name;
    constructor(name) {
        this.name = name;
    }

    feedTamagotchi(tamagotchi) {
        tamagotchi.foodValue++;
        console.log(this.name + ' fed ' + tamagotchi.name);
        console.log('Current hunger : ' + tamagotchi.foodValue);
    }

    medicateTamagotchi(tamagotchi) {

    }

    knockOutTamagotchi(tamagotchi) {

    }

}

const myPlayer = new Player('Hanyun');

console.log(myPlayer.feedTamagotchi(myTamagotchi));