package com;

import static org.junit.Assert.assertEquals;

import com.quote.*;
import com.theme.*;
import com.user.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {

	@Autowired
	ThemeService themeService;

	@Autowired
	QuoteService quoteService;

	@Autowired
	UserService userService;

	@Before
	public void setUp() {}

	@Test
	public void noRepeatedElements() {

		// Falla porque controlamos que no haya repetidos en el WebController

		// Repeated themes
		Theme theme1 = new Theme("theme1");
		themeService.save(theme1);
		themeService.save(new Theme(theme1.getName()));
		assertEquals(1, themeService.findByName(theme1.getName()).size());

		// Repeated quotes
		Quote quote1 = new Quote("quote1", "-", "-");
		quoteService.save(quote1);
		quoteService.save(new Quote(quote1.getName(), quote1.getAuthor(), quote1.getBook()));
		assertEquals(1, quoteService.findByName(quote1.getName()).size());
		
		// Repeated users
		User user1 = new User("user1", "p");
		userService.save(user1);
		userService.save(new User(user1.getName(), user1.getPasswordHash()));
		int n = 0;
		for(User u : userService.findAllUsers()) {
			if (u.getName().equals(user1.getName())) {
				n++;
			}
		}
		assertEquals(1, n);

		// Repeated quotes from a theme
		theme1.getQuotes().add(quote1);
		theme1.getQuotes().add(quote1);
		assertEquals(1, theme1.getQuotes().size());
		
		// Repeated texts from a theme
		Text text1 = new Text("text1"); 
		theme1.getTexts().add(text1);
		theme1.getTexts().add(text1);
		assertEquals(1, theme1.getTexts().size());


	}




}