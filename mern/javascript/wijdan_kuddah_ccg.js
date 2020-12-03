class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power
    }

}
class Effects extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.text)
            if (this.stat == 'res'){
                target.res += this.magnitude
            } else {
                target.power += this.magnitude
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

redBelt = new Unit("Red Belt Ninja", 3, 3, 4)
blackBelt = new Unit("Black Belt Ninja", 4, 5, 4)

hardAlgorithm = new Effects("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3)
unhandledPromiseRejection = new Effects("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2)
pairProgramming = new Effects("Pair Programming", 3, "increase target's power by 2	", "power", 2)
// player 1
console.log("Red belt before the effect: res ",redBelt.res)
hardAlgorithm.play(redBelt)
console.log("Red belt after the effect: res ",redBelt.res)
// player 2
console.log("Red belt before the effect: res ",redBelt.res)
unhandledPromiseRejection.play(redBelt)
console.log("Red belt after the effect: res ",redBelt.res)
// player 1
console.log("Red belt before the effect: power ",redBelt.power) 
pairProgramming.play(redBelt)
console.log("Red belt after the effect: power ",redBelt.power) 
// attack
console.log("Black belt before the attack: res ",blackBelt.res) 
redBelt.attack(blackBelt)
console.log("Black belt after the attack: res ",blackBelt.res)
