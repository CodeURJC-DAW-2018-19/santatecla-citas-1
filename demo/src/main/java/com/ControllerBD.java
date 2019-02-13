package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.boot.CommandLineRunner;

@Controller
public class ControllerBD implements CommandLineRunner {

    @Autowired
    private QuoteComponent repository;

    @Override
	public void run(String... args) throws Exception {
        repository.save(new Quote("Hola", "Yo", "Biblia"));

        List<Quote> bauers = repository.findByAuthor("yo"); 
        for (Quote bauer : bauers) {
            System.out.println(bauer);
        }
        
        repository.delete(bauers.get(0));
    }
}