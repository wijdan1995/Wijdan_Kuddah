package com.wijdan.events.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wijdan.events.models.Event;
import com.wijdan.events.models.Message;
import com.wijdan.events.models.User;
import com.wijdan.events.repositories.EventRepository;
import com.wijdan.events.repositories.MessageRepository;
import com.wijdan.events.repositories.UserRepository;

@Service
public class EventService {
    @Autowired
	private EventRepository eventRepository;
    @Autowired
	private UserRepository userRepository;
    @Autowired
    private MessageRepository messageRepository;
    
//     create new event
    public Event create(Event event) {
    	return eventRepository.save(event);
    }
    
//    update
    public Event update(Event event) {
    	return eventRepository.save(event);
    }
    
//    get one event by id
	public Event findEvent(Long id) {
		return eventRepository.findById(id).orElse(null);
	}
    
//     Get all events
	public ArrayList<Event> allEvents() {
		return (ArrayList<Event>) eventRepository.findAll();
	}
	
//	 join Event 
	public void joinEvent(Long event_id, Long user_id) {
		User user = userRepository.findById(user_id).orElse(null);
		Event event = findEvent(event_id);
		List<User> attendees = event.getAttendees();
		attendees.add(user);
		event.setAttendees(attendees);
		eventRepository.save(event);
	}
	
//	leave event
	public void leaveEvent(Long event_id, Long user_id) {
		User user = userRepository.findById(user_id).orElse(null);
		Event event = findEvent(event_id);
		List<User> attendees = event.getAttendees();
		attendees.remove(user);
		event.setAttendees(attendees);
		eventRepository.save(event);
	}
	
//	Delete event
	public void delete(Long id) {
		eventRepository.deleteById(id);
    }
	
	public Message createMessage(Message message) {
		return messageRepository.save(message);
	}

}
