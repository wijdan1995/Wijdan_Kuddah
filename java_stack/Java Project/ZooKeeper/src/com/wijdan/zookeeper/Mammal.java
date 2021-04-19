package com.wijdan.zookeeper;

public class Mammal {
	protected int energyLevel = 100;

	public int displayEnergy() {
		System.out.print(energyLevel);
		return energyLevel;
	}

	public Mammal(int energyLevel) {
		this.energyLevel = energyLevel;
	}
}
