package com.wijdan.licenses.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.wijdan.licenses.models.License;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {
    public List<License> findAll();
	public License findTopByOrderByNumberDesc();
}
