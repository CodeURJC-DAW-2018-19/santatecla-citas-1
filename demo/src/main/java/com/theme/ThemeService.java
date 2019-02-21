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

	@Autowired
	private ThemeRepository repository;

	public Optional<Theme> findOne(long id) {
		return repository.findById(id);
	}

	public Page<Theme> findAll(Pageable page) {

		page = new PageRequest(0, 4 + 4*page.getPageNumber());
		
		return repository.findAll(page);
	}

	public void save(Theme book) {
		repository.save(book);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}
	
	public Page<Theme> findByName(String name, Pageable page) {
		page = new PageRequest(0, 4 + 4*page.getPageNumber());
		return repository.findByNameContaining(name, page);
	}

}