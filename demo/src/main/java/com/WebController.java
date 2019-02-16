package com;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
		this.logged = (userComponent.getLoggedUser() != null);
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

	@GetMapping(value="/addQuoteToTheme")
	public String addQuoteToTheme(Model model, Theme theme) {

		model.addAttribute("quotes", quoteService.findAll());

		updateTabs(model);

		return "SelectQuote";
	}

	private void updateTabs(Model model) {
		if (this.userComponent.getLoggedUser() != null) {
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
		return this.home(model);
	}

	/*@GetMapping("/selectQuote/{id}")
	public String selectQuote(Model model, @PathVariable long id) {
		
		Optional<Quote> quote = quoteService.findOne(id);
		
		if(quote.isPresent()) {
			themeService.findOne(id).get().getQuotes().add(quote);
		}
		
		return "Themes";
	}*/
	
    
}
