package com.wijdan.objectmaster;

public class Samurai  extends Human{
	private static int count = 0;
	
	public Samurai() {
		this.health = 200;
		count++;
	}
	
	
	public void deathBlow(Human person) {
		person.health = 0;
		this.health -= this.health/2;
	}
	
	public void meditate() {
		this.health += this.health/2;
	}
	
	public static int howMany() {
		return Samurai.count;
	}

}
