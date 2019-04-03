package com.quote;

//import java.util.HashSet;
//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {

	private int pageSize = 6;

	@Autowired
	private QuoteRepository repository;

	public Optional<Quote> findOne(long id) {
		return repository.findById(id);
	}

	public List<Quote> findAll() {
		return repository.findAll();
	}
  
  	public Page<Quote> findByPage(Pageable page) {
		return repository.findAll(page);
	}

	public void save(Quote quote) {
		repository.save(quote);
  	}

	public void delete(long id) {
		repository.deleteById(id);
	}

	public List<Quote> findByNameStrict(String name){
		return repository.findByQuote(name);
	}
  
  	public List<Quote> findByName(String name) {
    	return repository.findDistinctByQuoteContainingOrAuthorContainingOrBookContaining(name, name, name);
	}

	public Page<Quote> findByName(String name, Pageable page) {
		return repository.findDistinctByQuoteContainingOrAuthorContainingOrBookContaining(name, name, name, page);
	}

	public int findSize(){
		return repository.findAll().size();
	}
}