package com;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import javax.annotation.PostConstruct;

import com.quote.Quote;
import com.quote.QuoteService;
import com.theme.Theme;
import com.theme.ThemeService;
import com.user.UserComponent;
import com.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
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
public class GeneralController implements ErrorController{
  @Autowired
	protected QuoteService quoteService;

	@Autowired
	protected ThemeService themeService;

	@Autowired
	protected UserService userService;

	@Autowired
	protected UserComponent userComponent;
  
	protected static Path PROJECT_FOLDER = Paths.get(System.getProperty("user.dir"), "themes-images");

	protected final int PAGE_SIZE = 6;
	protected final Pageable DEFAULT_PAGE = PageRequest.of(0, PAGE_SIZE);
	private static final String PATH = "/error";

	@PostConstruct
	public void init() throws IOException {
		if (!Files.exists(PROJECT_FOLDER)) {
			Files.createDirectories(PROJECT_FOLDER);
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
		@RequestParam(value="searchQuotes", required=false) String searchQuotes) {

   			if(searchThemes == null) searchThemes = "";
  	  		if(searchQuotes == null) searchQuotes = "";

			Page<Theme> themes =  themeService.findByPage(DEFAULT_PAGE);
			Page<Quote> quotes = quoteService.findByPage(DEFAULT_PAGE);

			model.addAttribute("quotes", quotes);
			model.addAttribute("themes", themes);
			model.addAttribute("searchThemes", false);
			model.addAttribute("searchQuotes", false);
		
			if (searchThemes == null || searchThemes.equals("")) {
      		model.addAttribute("themes", themes);
      		model.addAttribute("searchThemes", false);
    		} else {
      		themes = themeService.findByName(searchThemes, DEFAULT_PAGE);
      		model.addAttribute("themes", themes);
      		model.addAttribute("searchThemes", true);
      		model.addAttribute("noResultsTheme", themes.isEmpty());    
    		}

			//ToDo
			boolean plusButtonThemes = PAGE_SIZE < themes.getTotalElements();
    		model.addAttribute("plusButtonThemes", plusButtonThemes);

    		if (searchQuotes == null || searchQuotes.equals("")) {
    			model.addAttribute("quotes", quotes);
     			model.addAttribute("searchQuotes", false);
    		} else {
     			quotes = quoteService.findByName(searchQuotes, DEFAULT_PAGE);
      			model.addAttribute("quotes", quotes);
    			model.addAttribute("searchQuotes", true);
      			model.addAttribute("noResultsQuotes", quotes.isEmpty());
    		}

			//ToDo
			boolean plusButtonQuotes = PAGE_SIZE < quotes.getTotalElements();
    		model.addAttribute("plusButtonQuotes", plusButtonQuotes);

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

		model.addAttribute("showNextThemes", !themes.isLast());

		model.addAttribute("showNextQuotes", !quotes.isLast());
    
    	return "Home";
	}

  	@GetMapping("/error")
	public String error(Model model) {
		
		updateTabs(model);

		return "Error";
	}

  	@Override
  	public String getErrorPath() {
 		return PATH;
  	}

	private class MyInteger {
		private int value;
		public MyInteger(int v) {
			value = v;
		}
	}

	@GetMapping("/histogram")
	public String histogram(Model model) {
		
		model.addAttribute("histogram", this.themeService.getHistogram().getHistogramList());
    
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

		return home(model, null, null);
	}
	
}
