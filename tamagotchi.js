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

  puke() {
    this.foodValue--;
    console.log(this.name + ' just puked !');
    console.log('Current hunger : ' + this.foodValue + ' | MAMAMIAAAA');
  }

  satieted() {

  }

  sleepy() {

  }

  yawn() {
    this.fatigueValue--;
    console.log(this.name + ' yawned !' + ' | Current fatigue : ' + this.fatigueValue);
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

console.log(myTamagotchi2.puke());

console.log(myTamagotchi.yawn());