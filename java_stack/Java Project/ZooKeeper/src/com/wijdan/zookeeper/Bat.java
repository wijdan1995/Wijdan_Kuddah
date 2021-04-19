package com.wijdan.zookeeper;

public class Bat extends Mammal {
	public Bat() {
		super(300);
	}
	public Bat(int energyLevel) {
		super(energyLevel);
	}
	
	public void fly() {
		System.out.println("Flyyyyyyyy");
		energyLevel -= 50;
	}
	
	public void eatHumans() {
		System.out.println("Eat !!!!");
		energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("Attack !!!!!!!!!");
		energyLevel -= 100;
	}

}
