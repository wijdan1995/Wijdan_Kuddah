package com.wijdan.belt.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.wijdan.belt.models.User;
import com.wijdan.belt.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
    
    // find user by email
    public User findByEmail(String email) {
    	Optional<User> potentialUser = userRepository.findByEmail(email);
		return potentialUser.isPresent() ? potentialUser.get() : null;
    }
    
    // find user by id
    public User findUserById(Long id) {
    	if(id == null) {
			return null;
		}
    	Optional<User> potentialUser = userRepository.findById(id);
		return potentialUser.isPresent() ? potentialUser.get() : null;
    }
    
    // register user and hash their password
    public User registerUser(User user, BindingResult result) {
    	//    	check if the email already been used
        if(findByEmail(user.getEmail()) != null) {
			result.rejectValue("email", "Unique", "This email is already in use!");
		}
        //      check if the password and confirm password are matching  
		if(!user.getPassword().equals(user.getPasswordConfirmation())) {
			result.rejectValue("passwordConfirmation", "Matches", "The Confirm Password must match Password!");
		}
		if(result.hasErrors()) {
			return null;
		} else {
			String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
			user.setPassword(hashed);
			return userRepository.save(user);
		}
    }
    

    
    // authenticate user
    public boolean authenticateUser(String email, String password) {
        // first find the user by email
        User user = findByEmail(email);
        // if we can't find it by email, return false
        if(user == null) {
            return false;
        } else {
            // if the passwords match, return true, else, return false
            if(BCrypt.checkpw(password, user.getPassword())) {
                return true;
            } else {
                return false;
            }
        }
    }
}