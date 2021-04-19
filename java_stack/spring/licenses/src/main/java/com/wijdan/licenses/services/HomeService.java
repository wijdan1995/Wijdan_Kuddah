package com.wijdan.licenses.services;

import org.springframework.stereotype.Service;

import java.util.List;
import com.wijdan.licenses.models.Person;
import com.wijdan.licenses.models.License;

import com.wijdan.licenses.repositories.LicenseRepository;
import com.wijdan.licenses.repositories.PersonRepository;

@Service
public class HomeService {
	private LicenseRepository licenseRepository;
	private PersonRepository personRepository;
	
	public HomeService(LicenseRepository licenseRepository, PersonRepository personRepository) {
		this.licenseRepository = licenseRepository;
		this.personRepository = personRepository;
	}

	public Person getPerson(Long id) {
		return personRepository.findById(id).orElse(null);
	}
	public List<Person> getPeople() {
		return personRepository.findAll();
	}
	public List<Person> getUnlicensedPeople() {
		return personRepository.findByLicenseIdIsNull();
	}
	public Person createPerson(Person p) {
		return personRepository.save(p);
	}
	public License createLicense(License l) {
		l.setNumber(this.generateLicenseNumber());
		return licenseRepository.save(l);
	}
	public int generateLicenseNumber() {
		License l = licenseRepository.findTopByOrderByNumberDesc();
		if(l == null)
			return 1;
		int largestNumber = l.getNumber();
		largestNumber++;
		return (largestNumber);
	}

}
