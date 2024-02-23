console.log('tamagotchi file is loaded');

export class Tamagotchi {
  name;
  creatureType;
  hungerInterval;
  yawnInterval;
  pukeInterval;

  constructor(name, creatureType) {
    this.foodValue = 10;
    this.fatigueValue = 10;
    this.healthValue = 10;
    this.name = name;
    this.creatureType = creatureType;
  }

  start() {
    console.log(this.name);
    alert('Game has started!');
    this.hungerInterval = setInterval(this.hungry.bind(this), 6000);
    this.yawnInterval = setInterval(this.yawn.bind(this), 10000);
    this.pukeInterval = setInterval(this.puke.bind(this), 20000);
    setInterval(this.isAlive.bind(this), 2500);
  }

  gameOver() {
    console.log('Oh no ! ' + this.name + ' is dead !!');
    alert('Oh no ! ' + this.name + ' is dead !!');
    clearInterval(this.hungerInterval);
    clearInterval(this.yawnInterval);
    clearInterval(this.pukeInterval);
    return;
  }

  stop() {
    console.log('Game stopped.');
    alert('Game stopped.');
    clearInterval(this.hungerInterval);
    clearInterval(this.yawnInterval);
    clearInterval(this.pukeInterval);
  }

  hungry() {
    this.foodValue--;
    this.healthValue--;
    document.getElementById('hungerHolder').innerText = 'Hunger : ' + this.foodValue;
    console.log(this.name + ' is hungry !' + ' | Current hunger : ' + this.foodValue);
    document.getElementById('healthHolder').innerText = 'Health : ' + this.healthValue;
    console.log(this.name + ' is sick !' + ' | Current health : ' + this.healthValue);
    console.log();
  }

  puke() {
    this.foodValue--;
    this.healthValue--;
    document.getElementById('hungerHolder').innerText = 'Hunger : ' + this.foodValue;
    console.log(this.name + ' just puked !' + ' | Current hunger : ' + this.foodValue + ' | MAMAMIAAAA');
    document.getElementById('healthHolder').innerText = 'Health : ' + this.healthValue;
    console.log(this.name + ' is sick !' + ' | Current health : ' + this.healthValue);
    console.log();
  }

  yawn() {
    this.fatigueValue--;
    this.healthValue--;
    document.getElementById('fatigueHolder').innerText = 'Fatigue : ' + this.fatigueValue;
    console.log(this.name + ' yawned !' + ' | Current fatigue : ' + this.fatigueValue);
    document.getElementById('healthHolder').innerText = 'Health : ' + this.healthValue;
    console.log(this.name + ' is sick !' + ' | Current health : ' + this.healthValue);
    console.log();
  }

  isAlive() {
    if (this.healthValue <= 0) {
      this.gameOver();
    }
  }
}

/*export const myTamagotchi = new Tamagotchi("Tyrion", "Dwarf");

export const myTamagotchi2 = new Tamagotchi("Vador", "Sith");

console.log(myTamagotchi);

console.log(myTamagotchi2);

console.log();

console.log(myTamagotchi.hungry());

console.log(myTamagotchi2.puke());

console.log(myTamagotchi.yawn());*/
