package com.theme;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThemeService {

	@Autowired
	private ThemeRepository repository;

	public Optional<Theme> findOne(long id) {
		return repository.findById(id);
	}

	public List<Theme> findAll() {
		return repository.findAll();
	}

	public void save(Theme theme) {
		repository.save(theme);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}
  
  	public List<Theme> findByName(String name) {
		return repository.findByNameContaining(name);
	}
}