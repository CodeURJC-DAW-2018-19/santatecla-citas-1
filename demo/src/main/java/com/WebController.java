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

	@ModelAttribute
	public void addUserToModel(Model model) {
		boolean logged = userComponent.getLoggedUser() != null;
		model.addAttribute("logged", logged);
		if(logged) {
			model.addAttribute("admin", userComponent.getLoggedUser().getRoles().contains("ROLE_ADMIN"));
			model.addAttribute("userName",userComponent.getLoggedUser().getName());
		}
	}

	@GetMapping("/")
	public String home(Model model) {

		model.addAttribute("quotes", quoteService.findAll());
		model.addAttribute("themes", themeService.findAll());

		return "Home";
	}

	@GetMapping("/quote/{id}")
	public String showQuote(Model model, @PathVariable long id) {
		
		Optional<Quote> quote = quoteService.findOne(id);

		if(quote.isPresent()) {
			model.addAttribute("quote", quote.get());
		}

		return "Quotes";
	}

	@GetMapping("/deleteQuote/{id}")
	public String deleteQuote(Model model, @PathVariable long id) {
		
		quoteService.delete(id);
		
		return "Deleted";
	}
	
	@GetMapping("/theme/{id}")
	public String showTheme(Model model, @PathVariable long id) {
		
		Optional<Theme> theme = themeService.findOne(id);

		if(theme.isPresent()) {
			model.addAttribute("theme", theme.get());
		}

		return "Themes";
	}

	@GetMapping("/deleteTheme/{id}")
	public String deleteTheme(Model model, @PathVariable long id) {
		
		themeService.delete(id);
		
		return "Deleted";
	}

	@GetMapping("/login")
	public String login(Model model) {
		model.addAttribute("hideLogin", true);
		return "LogIn";
	}

	@GetMapping("/loginerror")
	public String loginError() {
		return "LogError";
	}

	@GetMapping("/histograma")
	public String histogram(Model model) {
		return "Histogram";
	}

	@GetMapping("/addTheme")
	public String addTheme(Model model) {
		return "AddTheme";
	}
	
	@GetMapping("/addQuote")
	public String addQuote(Model model) {
		return "AddQuote";
	}

	@PostMapping("/saveQuote")
	public String saveQuote(Model model, Quote quote) {
		quoteService.save(quote);
		return "SavedQuote";
	}

	@PostMapping("/saveTheme")
	public String saveTheme(Model model, Theme theme) {
		themeService.save(theme);
		return "SavedTheme";
	}

	@PostMapping("/saveUser")
	public String saveUser(Model model, User user) {
		userService.save(user);
		return "SavedQuote";
	}

	@GetMapping("/editQuote/{id}")
	public String newBook(Model model, @PathVariable long id) {
		
		Optional<Quote> quote = quoteService.findOne(id);
		
		if(quote.isPresent()) {
			model.addAttribute("quote", quote.get());
		}
		
		return "AddQuote";
	}
    
}
