package com.wijdan.objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Human attaker = new Human();
		Human attacked = new Human();
		
		attaker.attack(attacked);
		
		System.out.println(attacked.health);
		
		Samurai s = new Samurai();
		Wizard w = new Wizard();
		
		w.heal(attacked);
		System.out.println(attacked.health);
		s.deathBlow(attacked);
		System.out.println(attacked.health);
		;
		
		System.out.println(Samurai.howMany());
		

	}

}
