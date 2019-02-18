package com.quote;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {

	@Autowired
	private QuoteRepository repository;

	public Optional<Quote> findOne(long id) {
		return repository.findById(id);
	}

	public List<Quote> findAll() {
		return repository.findAll();
	}

	public void save(Quote book) {
		repository.save(book);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}

	public List<Quote> findByName(String name) {
		List<Quote> quotes = new ArrayList();
		quotes.addAll(repository.findByQuoteContaining(name));
		quotes.addAll(repository.findByAuthorContaining(name));
		quotes.addAll(repository.findByBookContaining(name));
		return quotes;
	}

}