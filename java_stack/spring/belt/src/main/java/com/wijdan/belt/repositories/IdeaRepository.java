package com.wijdan.belt.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wijdan.belt.models.Idea;


@Repository
public interface IdeaRepository extends CrudRepository<Idea, Long>{

}
