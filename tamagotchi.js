console.log('tamagotchi file is loaded');

class Tamagotchi {
  name;
  creatureType;

  constructor(name, creatureType) {
    this.foodValue = 10;
    this.fatigueValue = 10;
    this.healthValue = 10;
    this.name = name;
    this.creatureType = creatureType;
  }

  happy() {

  }

  sad() {

  }

  hungry() {
    this.foodValue--;
    console.log(this.name + ' is hungry !');
    console.log('Current hunger : ' + this.foodValue);
  }

  satieted() {

  }

  sleepy() {

  }

  rested() {

  }

}

const myTamagotchi = new Tamagotchi("Tyrion", "Dwarf");

const myTamagotchi2 = new Tamagotchi("Vador", "Sith");

console.log(myTamagotchi);

console.log(myTamagotchi2);

console.log();

console.log(myTamagotchi.hungry());