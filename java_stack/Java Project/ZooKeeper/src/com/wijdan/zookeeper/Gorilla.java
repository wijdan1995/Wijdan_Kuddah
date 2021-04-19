package com.wijdan.zookeeper;
public class Gorilla extends Mammal {
	public Gorilla(int energyLevel) {
		super(energyLevel);
	}
	public void throwSomething() {
		System.out.println("The gorilla has thrown something -5");
		energyLevel -= 5;

	}
	
	public void eatBananas() {
		System.out.println("The gorilla eat bananas +10");
		energyLevel += 10;

	}
	
	public void climb() {
		System.out.println("The gorilla has climbed a tree -10");
		energyLevel -= 10;
		
	}

}
