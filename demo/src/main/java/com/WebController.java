package com;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.PathVariable;

import com.theme.*;
import com.quote.*;
import com.user.*;


@Controller
public class WebController {

	@Autowired
	private QuoteService quoteService;

	@Autowired
	private ThemeService themeService;

	@Autowired
	private UserService userService;

	@Autowired
	private UserComponent userComponent;

	boolean logged = false;

	@ModelAttribute
	public void addUserToModel(Model model) {
		this.logged = (userComponent.isLoggedUser());
		model.addAttribute("logged", this.logged);
		if(this.logged) {
			model.addAttribute("admin", userComponent.getLoggedUser().getRoles().contains("ROLE_ADMIN"));
			model.addAttribute("userName",userComponent.getLoggedUser().getName());
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

		Pageable pageTheme = new PageRequest(pageThemeNum, 10);
		Pageable pageQuote = new PageRequest(pageQuoteNum, 10);

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
			model.addAttribute("noResults", themes.isEmpty());	
		}

		if (searchQuotes == null || searchQuotes.equals("")) {
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", false);
		} else {
			quotes = quoteService.findByName(searchQuotes, pageQuote);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResults", quotes.isEmpty());
		}

		model.addAttribute("search1", searchThemes);	
		model.addAttribute("search2", searchQuotes);	

		if(this.userComponent.isLoggedUser()) {
			this.userComponent.getLoggedUser().setActive(null);
		}

		model.addAttribute("atHome", true);		
		updateTabs(model);

		int prevPageThemes = (themeService.getPageNumber(themes)>0)?(themeService.getPageNumber(themes)-1):0;
		int prevPageQuotes = (quoteService.getPageNumber(quotes)>0)?(quoteService.getPageNumber(quotes)-1):0;

		model.addAttribute("showNextThemes", !themes.isLast());
		model.addAttribute("showPrevThemes", !themes.isFirst());
		model.addAttribute("nextPageThemes", themeService.getPageNumber(themes) +1);
		model.addAttribute("prevPageThemes", prevPageThemes);
		model.addAttribute("numPageThemes", themeService.getPageNumber(themes));

		model.addAttribute("showNextQuotes", !quotes.isLast());
		model.addAttribute("showPrevQuotes", !quotes.isFirst());
		model.addAttribute("nextPageQuotes", quoteService.getPageNumber(quotes) +1);
		model.addAttribute("prevPageQuotes", prevPageQuotes);
		model.addAttribute("numPageQuotes", quoteService.getPageNumber(quotes));

		//model.addAttribute("search","");


		return "Home";
	}

	/*@GetMapping("/searchThemes")
	public String searchThemes(Model model, 
		@RequestParam(value="pageTheme", required=false) Integer pageThemeNum,
		@RequestParam(value="pageQuote", required=false) Integer pageQuoteNum,  
		@RequestParam String name) {

		if(pageThemeNum == null) pageThemeNum = 0;
		if(pageQuoteNum == null) pageQuoteNum = 0;

		Pageable pageTheme = new PageRequest(pageThemeNum, 10);
		Pageable pageQuote = new PageRequest(pageQuoteNum, 10);

		Page<Theme> themes =  themeService.findAll(pageTheme);
		Page<Quote> quotes = quoteService.findAll(pageQuote);

		model.addAttribute("quotes", quotes);

		if (name.equals("")) {
			model.addAttribute("themes", themes);
			model.addAttribute("searchThemes", false);
		} else {
			themes = themeService.findByName(name, pageTheme);
			model.addAttribute("themes", themes);
			model.addAttribute("searchThemes", true);
			model.addAttribute("noResults", themes.isEmpty());	
		}

		model.addAttribute("searchQuotes", false);	
		model.addAttribute("search", name);			
		
		if(this.userComponent.isLoggedUser()) {
			this.userComponent.getLoggedUser().setActive(null);
		}
		model.addAttribute("atHome", true);		
		updateTabs(model);

		int prevPageThemes = (themeService.getPageNumber(themes)>0)?(themeService.getPageNumber(themes)-1):0;
		int prevPageQuotes = (quoteService.getPageNumber(quotes)>0)?(quoteService.getPageNumber(quotes)-1):0;

		model.addAttribute("showNextThemes", !themes.isLast());
		model.addAttribute("showPrevThemes", !themes.isFirst());
		model.addAttribute("nextPageThemes", themeService.getPageNumber(themes) +1);
		model.addAttribute("prevPageThemes", prevPageThemes);
		model.addAttribute("numPageThemes", themeService.getPageNumber(themes));

		model.addAttribute("showNextQuotes", !quotes.isLast());
		model.addAttribute("showPrevQuotes", !quotes.isFirst());
		model.addAttribute("nextPageQuotes", quoteService.getPageNumber(quotes) +1);
		model.addAttribute("prevPageQuotes", prevPageQuotes);
		model.addAttribute("numPageQuotes", quoteService.getPageNumber(quotes));

		return "Home";
	}

	@GetMapping("/searchQuotes")
	public String searchQuotes(Model model, 
		@RequestParam(value="pageTheme", required=false) Integer pageThemeNum,
		@RequestParam(value="pageQuote", required=false) Integer pageQuoteNum,  
		@RequestParam String name) {

		if(pageThemeNum == null) pageThemeNum = 0;
		if(pageQuoteNum == null) pageQuoteNum = 0;

		Pageable pageTheme = new PageRequest(pageThemeNum, 10);
		Pageable pageQuote = new PageRequest(pageQuoteNum, 10);

		Page<Theme> themes =  themeService.findAll(pageTheme);
		Page<Quote> quotes = quoteService.findAll(pageQuote);

		model.addAttribute("themes", themes);

		if (name.equals("")) {
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", false);
		} else {
			quotes = quoteService.findByName(name, pageQuote);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResults", quotes.isEmpty());
		}

		model.addAttribute("searchThemes", false);
		model.addAttribute("search", name);				
		
		if(this.userComponent.isLoggedUser()) {
			this.userComponent.getLoggedUser().setActive(null);
		}
		model.addAttribute("atHome", true);		
		updateTabs(model);

		int prevPageThemes = (themeService.getPageNumber(themes)>0)?(themeService.getPageNumber(themes)-1):0;
		int prevPageQuotes = (quoteService.getPageNumber(quotes)>0)?(quoteService.getPageNumber(quotes)-1):0;

		model.addAttribute("showNextThemes", !themes.isLast());
		model.addAttribute("showPrevThemes", !themes.isFirst());
		model.addAttribute("nextPageThemes", themeService.getPageNumber(themes) +1);
		model.addAttribute("prevPageThemes", prevPageThemes);
		model.addAttribute("numPageThemes", themeService.getPageNumber(themes));

		model.addAttribute("showNextQuotes", !quotes.isLast());
		model.addAttribute("showPrevQuotes", !quotes.isFirst());
		model.addAttribute("nextPageQuotes", quoteService.getPageNumber(quotes) +1);
		model.addAttribute("prevPageQuotes", prevPageQuotes);
		model.addAttribute("numPageQuotes", quoteService.getPageNumber(quotes));

		return "Home";
	}*/

	@GetMapping("/quote/{id}")
	public String showQuote(Model model, @PathVariable long id) {
		
		Optional<Quote> quote = quoteService.findOne(id);

		if(quote.isPresent()) {
			Quote q = quote.get();
			model.addAttribute("quote", q);

			if(!this.userComponent.getLoggedUser().getOpenTabs().contains(q)) {
				this.userComponent.getLoggedUser().addTab(q);
			}
			this.userComponent.getLoggedUser().setActive(q);
		}
		
		updateTabs(model);

		return "Quotes";
	}

	@GetMapping("/deleteQuote/{id}")
	public String deleteQuote(Model model, @PathVariable long id) {
		
		Optional<Quote> quote = quoteService.findOne(id);
		if(quote.isPresent()) {
			this.userComponent.getLoggedUser().removeTab(quote.get());
		}

		quoteService.delete(id);

		updateTabs(model);
		
		return "Deleted";
	}
	
	@GetMapping("/theme/{id}")
	public String showTheme(Model model, @PathVariable long id) {
		
		Optional<Theme> theme = themeService.findOne(id);

		if(theme.isPresent()) {
			Theme t = theme.get();
			model.addAttribute("theme", t);

			if(!this.userComponent.getLoggedUser().getOpenTabs().contains(t)) {
				this.userComponent.getLoggedUser().addTab(t);
			}
			this.userComponent.getLoggedUser().setActive(t);
		}
		
		updateTabs(model);

		return "Themes";
	}

	@GetMapping("/deleteTheme/{id}")
	public String deleteTheme(Model model, @PathVariable long id) {

		Optional<Theme> theme = themeService.findOne(id);
		if(theme.isPresent()) {
			this.userComponent.getLoggedUser().removeTab(theme.get());
		}

		themeService.delete(id);
		
		updateTabs(model);

		return "Deleted";
	}

	@GetMapping("/login")
	public String login(Model model) {

		model.addAttribute("hideLogin", true);
		
		updateTabs(model);

		return "LogIn";
	}

	@GetMapping("/loginerror")
	public String loginError(Model model) {
		
		updateTabs(model);

		return "LogError";
	}

	@GetMapping("/histogram")
	public String histogram(Model model) {
		
		updateTabs(model);

		return "Histogram";
	}

	@GetMapping("/addTheme")
	public String addTheme(Model model) {
		
		updateTabs(model);

		return "AddTheme";
	}
	
	@GetMapping("/addQuote")
	public String addQuote(Model model) {
		
		updateTabs(model);

		return "AddQuote";
	}
	
	@PostMapping("/saveQuote")
	public String saveQuote(Model model, Quote quote) {

		quoteService.save(quote);
		
		updateTabs(model);

		return "SavedQuote";
	}

	@PostMapping("/saveTheme")
	public String saveTheme(Model model, Theme theme) {

		themeService.save(theme);
		
		updateTabs(model);

		return "Saved";
	}

	@PostMapping("/saveUser")
	public String saveUser(Model model, User user) {
		
		userService.save(user);

		updateTabs(model);

		return "Saved";
	}

	@GetMapping("/editQuote/{id}")
	public String editQuote(Model model, @PathVariable long id) {
		
		Optional<Quote> quote = quoteService.findOne(id);
		
		if(quote.isPresent()) {
			model.addAttribute("quote", quote.get());
		}
		
		updateTabs(model);
		
		return "AddQuote";
	}

	@GetMapping(value="/addQuoteToTheme{id}")
    public String addQuoteToTheme(Model model, @PathVariable long id) {

        model.addAttribute("quotes", quoteService.findAll());
        model.addAttribute("themeId", id);
        updateTabs(model);

        return "SelectQuote";
	}

	private void updateTabs(Model model) {
		if (this.userComponent.isLoggedUser()) {
			model.addAttribute("openTabs", this.userComponent.getLoggedUser().getOpenTabs());
		}
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
		return "/CloseTab";
	}

	@GetMapping("/addQuoteToTheme{theme}/selectQuote{id}")
    public String selectQuote(Model model, @PathVariable long id, @PathVariable long theme) {

        Optional<Quote> quote = quoteService.findOne(id);
        if(quote.isPresent()) {
			if(!(themeService.findOne(theme).get().getQuotes().contains(quote.get()))){
				themeService.findOne(theme).get().getQuotes().add(quote.get());
				themeService.save(themeService.findOne(theme).get());
			}
        }

        return "Saved";
    }
		
	@GetMapping("/addQuoteToTheme{id}/searchQuotes")
	public String selectQuoteSearch(Model model, @PathVariable long id, @RequestParam String name) {

		if (name.equals("")) {
			model.addAttribute("quotes", quoteService.findAll());
			model.addAttribute("searchQuotes", false);
		} else {
			List<Quote> quotes = quoteService.findByNameList(name);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResults", quotes.isEmpty());
		}
		model.addAttribute("themeId", id);
		model.addAttribute("search", name);
		
		return "SelectQuote";
	}
    
}
