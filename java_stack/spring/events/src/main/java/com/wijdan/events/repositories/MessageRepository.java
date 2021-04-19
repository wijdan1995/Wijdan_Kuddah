package com.wijdan.events.repositories;

import org.springframework.data.repository.CrudRepository;

import com.wijdan.events.models.Message;



public interface MessageRepository extends CrudRepository<Message, Long>{

}
