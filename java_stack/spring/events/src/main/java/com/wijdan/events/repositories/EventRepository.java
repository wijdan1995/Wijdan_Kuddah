package com.wijdan.events.repositories;

import org.springframework.data.repository.CrudRepository;

import com.wijdan.events.models.Event;

public interface EventRepository extends CrudRepository<Event, Long>{

}
