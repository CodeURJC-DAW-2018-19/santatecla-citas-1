package com;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

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
}