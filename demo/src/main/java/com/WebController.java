package com;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

	private long theme;

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
	public String home(Model model) {

		model.addAttribute("quotes", quoteService.findAll());
		model.addAttribute("themes", themeService.findAll());
		model.addAttribute("searchThemes", false);
		model.addAttribute("searchQuotes", false);		

		if(this.userComponent.isLoggedUser()) {
			this.userComponent.getLoggedUser().setActive(null);
		}
		model.addAttribute("atHome", true);		
		updateTabs(model);

		return "Home";
	}

	@GetMapping("/searchThemes")
	public String searchThemes(Model model, @RequestParam String name) {

		model.addAttribute("quotes", quoteService.findAll());

		if (name.equals("")) {
			model.addAttribute("themes", themeService.findAll());
			model.addAttribute("searchThemes", false);
		} else {
			List<Theme> themes = themeService.findByName(name);
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

		return "Home";
	}

	@GetMapping("/searchQuotes")
	public String searchQuotes(Model model, @RequestParam String name) {

		model.addAttribute("themes", themeService.findAll());

		if (name.equals("")) {
			model.addAttribute("quotes", quoteService.findAll());
			model.addAttribute("searchQuotes", false);
		} else {
			List<Quote> quotes = quoteService.findByName(name);
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

		return "Home";
	}

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

		return "SavedTheme";
	}

	@PostMapping("/saveUser")
	public String saveUser(Model model, User user) {
		
		userService.save(user);

		updateTabs(model);

		return "SavedQuote";
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
        this.theme = id;
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
    public String selectQuote(Model model, @PathVariable long id) {

        Optional<Quote> quote = quoteService.findOne(id);
        if(quote.isPresent()) {
			themeService.findOne(this.theme).get().getQuotes().add(quote.get());
			themeService.save(themeService.findOne(theme).get());
            for(Quote q: themeService.findOne(this.theme).get().getQuotes()){
                System.out.println(q.getId());
            }
        }

        return "SavedQuote";
    }
		
	@GetMapping("/addQuoteToTheme{id}/searchQuotes")
	public String selectQuoteSearch(Model model, @PathVariable long id, @RequestParam String name) {

		if (name.equals("")) {
			model.addAttribute("quotes", quoteService.findAll());
			model.addAttribute("searchQuotes", false);
		} else {
			List<Quote> quotes = quoteService.findByName(name);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResults", quotes.isEmpty());
		}
		model.addAttribute("themeId", id);
		model.addAttribute("search", name);
		
		return "SelectQuote";
	}
    
}
