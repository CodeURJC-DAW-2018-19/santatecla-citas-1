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
  
  	public Page<Quote> findAll(Pageable page) {

		return repository.findAll(PageRequest.of(0, pageSize(page)));
	}

	public void save(Quote book) {
		repository.save(book);
  	}

	public void delete(long id) {
		repository.deleteById(id);
	}
  
  public List<Quote> findByName(String name) {
    return repository.findDistinctByQuoteContainingOrAuthorContainingOrBookContaining(name, name, name);
    /*HashSet<Quote> quotesSet = new HashSet();
		quotesSet.addAll(repository.findByQuoteContaining(name));
		quotesSet.addAll(repository.findByAuthorContaining(name));
		quotesSet.addAll(repository.findByBookContaining(name));
		List<Quote> quotesList = new ArrayList();
		quotesList.addAll(quotesSet);
		return quotesList;*/
	}

	public Page<Quote> findByName(String name, Pageable page) {
		/*HashSet<Quote> quotesSet = new HashSet();
		quotesSet.addAll(repository.findByQuoteContaining(name));
		quotesSet.addAll(repository.findByAuthorContaining(name));
		quotesSet.addAll(repository.findByBookContaining(name));
		List<Quote> quotesList = new ArrayList();
		quotesList.addAll(quotesSet);
		pageable = new PageRequest(0, pageSize(pageable));
		Page<Quote> page = new PageImpl<>(quotesList, pageable, quotesList.size());
		return page;*/

		return repository.findDistinctByQuoteContainingOrAuthorContainingOrBookContaining(name, name, name, PageRequest.of(0, pageSize(page)));
	}

	public int pageSize(Pageable page){
		return pageSize + pageSize*page.getPageNumber();
	}

	public int getPageNumber(Page<Quote> page){
		return (page.getSize()-4)/4;
	}
}