package com.quote;

//import java.util.List;

//import com.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteRepository extends JpaRepository<Quote, Long> {

	//public List<Quote> findByUser(User user);
	
}