package com.wijdan.dojosandninjas.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wijdan.dojosandninjas.models.Dojo;
import com.wijdan.dojosandninjas.models.Ninja;
import com.wijdan.dojosandninjas.repositories.DojoRepository;
import com.wijdan.dojosandninjas.repositories.NinjaRepository;

@Service
public class AppService {
	private final DojoRepository dojoRepo;
	private final NinjaRepository ninjaRepo;
	public AppService(DojoRepository dojoRepo, NinjaRepository ninjaRepo) {
		this.dojoRepo = dojoRepo;
		this.ninjaRepo = ninjaRepo;
	}
	
//	create ninja
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
//	create dojo
	public Dojo createDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
//	get all ninjas
	public List<Ninja> allNinjas() {
		return (List<Ninja>) ninjaRepo.findAll();
	}
	
//	get all dojos
	public List<Dojo> allDojos() {
		return (List<Dojo>) dojoRepo.findAll();
	}
//	get one dojo
	public Dojo findDojo(Long id) {
		return this.dojoRepo.findById(id).orElse(null);
	}


}
