package com.user;

import java.util.List;
//import java.util.Optional;

//import javax.xml.stream.events.Comment;

import com.quote.Quote;
import com.quote.QuoteRepository;
//import com.quote.QuoteService;
//import com.theme.ThemeRepository;
import com.theme.ThemeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository uRepository;


	public User findOne(long id) {
		return uRepository.findById(id);
	}

	public List<User> findAllUsers() {
		return uRepository.findAll();
	}

	public Page<User> findAllUsers(PageRequest page) {
		return uRepository.findAll(page);
	}

	public void save(User user) {
		uRepository.save(user);
	}

	public void delete(long id) {
		uRepository.deleteById(id);
	}

	public void deleteUser(User user) {
		// Clear user's themes
		ThemeService.deleteUserThemes(user);

		/* Clear user's themes
		List<Quote> userQuotes = qRepository.findByUser(user);
		for (Quote quote : userQuotes)
			qRepository.delete(quote);
		userQuotes.clear();*/

		// Delete user
		uRepository.delete(user);
	}

	public User findByEmail(String email) {
		return uRepository.findByEmail(email);
	}


}