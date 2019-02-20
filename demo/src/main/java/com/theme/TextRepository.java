package com.theme;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TextRepository extends JpaRepository<Text, Long> {
	
    public List<Text> findByTextContaining(String text);
    
}