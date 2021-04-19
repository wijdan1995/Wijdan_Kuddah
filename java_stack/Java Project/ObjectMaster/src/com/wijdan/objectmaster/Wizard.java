package com.wijdan.objectmaster;

public class Wizard extends Human{
    public Wizard() {
        this.health = 50;
        this.intelligence = 8;
    }
	
	public void heal(Human person) {
		person.health += this.intelligence;
		
	}
	
	public void fireball(Human person) {
		person.health -= this.intelligence * 3;
		
	}

}
