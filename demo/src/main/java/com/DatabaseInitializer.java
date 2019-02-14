package com;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.theme.*;
import com.quote.*;
import com.user.*;

@Component
public class DatabaseInitializer {

	@Autowired
    private QuoteRepository quoteRepository;
    
    @Autowired
    private ThemeRepository themeRepository;
    
    @Autowired
	private UserRepository userRepository;

	@PostConstruct
	public void init() {

		// Sample quotes

		quoteRepository.save(new Quote("Cita 1","Paco","MilYUnanochesConNacho"));
        quoteRepository.save(new Quote("Cita 2","Jones","MilYUnanochesConNacho"));
        quoteRepository.save(new Quote("Cita 3","Pablo","MilYUnanochesConNacho"));
		quoteRepository.save(new Quote("Cita 4","Tyrion","MilYUnanochesConNacho"));
        quoteRepository.save(new Quote("Cita 5","Daenerys","MilYUnanochesConNacho"));
        
        // Sample themes

		themeRepository.save(new Theme("Amor"));
        themeRepository.save(new Theme("Odio"));
        themeRepository.save(new Theme("Vida"));
        themeRepository.save(new Theme("Democracia"));
        
        // Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));

	}

}