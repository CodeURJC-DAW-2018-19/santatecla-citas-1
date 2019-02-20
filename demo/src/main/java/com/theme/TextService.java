package com.theme;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TextService {

	@Autowired
	private TextRepository repository;

	public Optional<Text> findOne(long id) {
		return repository.findById(id);
	}

	public List<Text> findAll() {
		return repository.findAll();
	}

	public void save(Text book) {
		repository.save(book);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}
  
  public List<Text> findByName(String name) {
		return repository.findByTextContaining(name);
	}
}