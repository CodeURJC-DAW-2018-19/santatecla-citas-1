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

        // Quotes
        Quote quote1 = new Quote("Cita 1","Paco","MilYUnanochesConNacho");
        Quote quote2 = new Quote("Cita 2","Jones","MilYUnanochesConNacho");
        Quote quote3 = new Quote("Cita 3","Pablo","MilYUnanochesConNacho");
        Quote quote4 = new Quote("Cita 4","Tyrion","MilYUnanochesConNacho");
        Quote quote5 = new Quote("Cita 5","Daenerys","MilYUnanochesConNacho");

		// Save quotes
		quoteRepository.save(quote1);
        quoteRepository.save(quote2);
        quoteRepository.save(quote3);
		quoteRepository.save(quote4);
        quoteRepository.save(quote5);

        //Themes
        Theme theme1 = new Theme("Amor");
        Theme theme2 = new Theme("Odio");
        Theme theme3 = new Theme("Vida");
        Theme theme4 = new Theme("Democracia");

        theme1.getQuotes().add(quote1);
        theme1.getQuotes().add(quote2);
        theme2.getQuotes().add(quote3);
        theme2.getQuotes().add(quote4);
        
        // Save themes
		themeRepository.save(theme1);
        themeRepository.save(theme2);
        themeRepository.save(theme3);
        themeRepository.save(theme4);

        // Sample users
		userRepository.save(new User("user", "pass", "ROLE_USER"));
        userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
        userRepository.save(new User("alex", "alex"));

	}

}