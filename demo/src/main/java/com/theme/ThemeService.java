package com.theme;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ThemeService {

	private int pageSize = 10;

	@Autowired
	private ThemeRepository repository;

	public Optional<Theme> findOne(long id) {
		return repository.findById(id);
	}

	public Page<Theme> findAll(Pageable page) {

		page = new PageRequest(0, pageSize(page));
		
		return repository.findAll(page);
	}

	public void save(Theme book) {
		repository.save(book);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}
	
	public Page<Theme> findByName(String name, Pageable page) {

		page = new PageRequest(0, pageSize(page));

		return repository.findByNameContaining(name, page);
	}

	public int pageSize(Pageable page){
		return pageSize + pageSize*page.getPageNumber();
	}

	public int getPageNumber(Page<Theme> page){
		return (page.getSize()-4)/4;
	}

}