package com;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

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
	public void themeServiceAddTheme(){
		Theme theme1 = new Theme("theme1");
		themeService.save(theme1);
		assertTrue(themeService.findByName("theme1").contains(theme1));
	}

	@Test
	public void quoteServiceAddTheme(){
		Quote quote = new Quote("test", "test", "test");
		quoteService.save(quote);
		assertTrue(quoteService.findByName("test").contains(quote));
	}

	@Test
	public void themeServiceFindByName(){
		Theme theme1 = new Theme("theme11");
		Theme theme2 = new Theme("theme12");
		Theme theme3 = new Theme("theme");
		Theme theme4 = new Theme("test");
		
		themeService.save(theme1);
		themeService.save(theme2);
		themeService.save(theme3);
		themeService.save(theme4);

		assertEquals(2, themeService.findByName("theme1").size());
	}

	@Test
	public void quoteServiceFindByName(){
		Quote quote1 = new Quote("quote11", "test", "test");
		Quote quote2 = new Quote("quote12", "test", "test");
		Quote quote3 = new Quote("quote", "test", "test");
		Quote quote4 = new Quote("test", "test", "test");
		
		quoteService.save(quote1);
		quoteService.save(quote2);
		quoteService.save(quote3);
		quoteService.save(quote4);

		assertEquals(2, quoteService.findByName("quote1").size());
	}

}