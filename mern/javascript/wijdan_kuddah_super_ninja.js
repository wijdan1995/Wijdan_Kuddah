class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`${ this.name }`);
    }
    showStats() {
        console.log(`${ this.name } strength: ${ this.strength }, speed: ${ this.speed }, health: ${ this.health }.`);
    }
    drinkSake() {
        this.health += 10
        // console.log(`health: ${ this.health }`);
    }
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10) {
        super(name, health, speed, strength);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
console.log(superSensei.wisdom)
