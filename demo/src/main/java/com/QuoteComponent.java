package com.example.demo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteComponent extends JpaRepository<Quote, Long> {

	List<Quote> findByQuote(String quote);
    List<Quote> findByAuthor(String author);
    List<Quote> findByBook(String book);
	
}