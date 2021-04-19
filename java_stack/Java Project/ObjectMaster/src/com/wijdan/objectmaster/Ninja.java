package com.wijdan.objectmaster;

public class Ninja extends Human {
	public Ninja() {
        this.stealth = 10;
    }
	public void steal(Human person) {
		person.health -= this.stealth;
		this.health += this.stealth;
	}
	
	public void runAway() {
		this.health -= 10;
	}

}
