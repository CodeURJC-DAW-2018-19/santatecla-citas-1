package com;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import com.quote.Quote;
import com.quote.QuoteService;
import com.theme.Theme;
import com.theme.ThemeService;
import com.user.UserComponent;
import com.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GeneralController{
  @Autowired
	protected QuoteService quoteService;

	@Autowired
	protected ThemeService themeService;

	@Autowired
	protected UserService userService;

	@Autowired
	protected UserComponent userComponent;
  
  protected static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir")+"/demo/src/main/resources/static/assets/img");

	@PostConstruct
	public void init() throws IOException {
		if (!Files.exists(FILES_FOLDER)) {
			Files.createDirectories(FILES_FOLDER);
		}
  }
    
  protected void updateTabs(Model model) {
		if (this.userComponent.isLoggedUser()) {
			model.addAttribute("openTabs", this.userComponent.getLoggedUser().getOpenTabs());
		}
	}

	@ModelAttribute
	public void addUserToModel(Model model) {
		Boolean logged = (userComponent.isLoggedUser());
		model.addAttribute("logged", logged);

		if (logged) {
			model.addAttribute("admin", userComponent.getLoggedUser().getRoles().contains("ROLE_ADMIN"));
			model.addAttribute("userName", userComponent.getLoggedUser().getName());
		}
	}

	@GetMapping("/")
	public String home(Model model,
	  @RequestParam(value="searchThemes", required=false) String searchThemes,
		@RequestParam(value="searchQuotes", required=false) String searchQuotes,
		@RequestParam(value="pageTheme", required=false) Integer pageThemeNum,
		@RequestParam(value="pageQuote", required=false) Integer pageQuoteNum) {
    
    if(pageThemeNum == null) pageThemeNum = 0;
    if(pageQuoteNum == null) pageQuoteNum = 0;
    if(searchThemes == null) searchThemes = "";
    if(searchQuotes == null) searchQuotes = "";

		Pageable pageTheme = PageRequest.of(pageThemeNum, 10);
		Pageable pageQuote = PageRequest.of(pageQuoteNum, 10);

		Page<Theme> themes =  themeService.findAll(pageTheme);
		Page<Quote> quotes = quoteService.findAll(pageQuote);

		model.addAttribute("quotes", quotes);
		model.addAttribute("themes", themes);
		model.addAttribute("searchThemes", false);
		model.addAttribute("searchQuotes", false);
		
		if (searchThemes == null || searchThemes.equals("")) {
			model.addAttribute("themes", themes);
			model.addAttribute("searchThemes", false);
		} else {
			themes = themeService.findByName(searchThemes, pageTheme);
			model.addAttribute("themes", themes);
			model.addAttribute("searchThemes", true);
			model.addAttribute("noResultsTheme", themes.isEmpty());	
		}

		if (searchQuotes == null || searchQuotes.equals("")) {
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", false);
		} else {
			quotes = quoteService.findByName(searchQuotes, pageQuote);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResultsQuotes", quotes.isEmpty());
		}

		model.addAttribute("searchThemeString", searchThemes);	
		model.addAttribute("searchQuoteString", searchQuotes);	

		if(this.userComponent.isLoggedUser()) {
			this.userComponent.getLoggedUser().setActive(null);
		}

		model.addAttribute("atHome", true);		
		updateTabs(model);
    
    model.addAttribute("deleteThemeMessage", false);
		model.addAttribute("saveThemeMessage", false);
		model.addAttribute("deleteQuoteMessage", false);
		model.addAttribute("saveQuoteMessage", false);
		model.addAttribute("repeatThemeMessage", false);
    model.addAttribute("repeatQuoteMessage", false);

		//int prevPageThemes = (themeService.getPageNumber(themes)>0)?(themeService.getPageNumber(themes)-1):0;
		//int prevPageQuotes = (quoteService.getPageNumber(quotes)>0)?(quoteService.getPageNumber(quotes)-1):0;

		model.addAttribute("showNextThemes", !themes.isLast());
		model.addAttribute("nextPageThemes", themeService.getPageNumber(themes) +1);
		model.addAttribute("numPageThemes", themeService.getPageNumber(themes));

		model.addAttribute("showNextQuotes", !quotes.isLast());
		model.addAttribute("nextPageQuotes", quoteService.getPageNumber(quotes) +1);
		model.addAttribute("numPageQuotes", quoteService.getPageNumber(quotes));
    
    return "Home";
  }
  
  @GetMapping("/error")
	public String error(Model model) {
		
		updateTabs(model);

		return "Error";
	}

	private class MyInteger {
		private int value;
		public MyInteger(int v) {
			value = v;
		}
	}

	@GetMapping("/histogram")
	public String histogram(Model model) {
  
  	List<Theme> savedThemes = this.themeService.findAll();
		model.addAttribute("savedThemes", savedThemes);

		List<MyInteger> numQuotes = new ArrayList<>();
    
		for(Theme t : savedThemes) {
			numQuotes.add(new MyInteger(this.themeService.findOne(t.getId()).get().getQuotes().size()));
		}
    
		model.addAttribute("numQuotes", numQuotes);
    
		updateTabs(model);

		return "Histogram";
	}

	@GetMapping(value="/close/{type}/{id}")
	private String closeTab(Model model, @PathVariable String type, @PathVariable long id) {
		
		if (type.equals("theme")) {	
			Optional<Theme> theme = themeService.findOne(id);
			if(theme.isPresent()) {
				this.userComponent.getLoggedUser().removeTab(theme.get());
			}
		} else if(type.equals("quote")) {
			Optional<Quote> quote = quoteService.findOne(id);
			if(quote.isPresent()) {
				this.userComponent.getLoggedUser().removeTab(quote.get());
			}
		}

		return home(model, null, null, null, null);
	}
}
