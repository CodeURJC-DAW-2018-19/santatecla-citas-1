package com.theme;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThemeRepository extends JpaRepository<Theme, Long> {
	
    public Page<Theme> findByNameContaining(String name, Pageable page);

    public Page<Theme> findByName(String name, Pageable page);
    
}