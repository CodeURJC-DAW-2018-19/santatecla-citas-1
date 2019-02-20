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
	private TextService textService;

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
    // add User
    model.addAttribute("logged", userComponent.isLoggedUser());
		User user = userComponent.getLoggedUser();

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
		model.addAttribute("idTheme", id);

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

	@GetMapping("/register")
	public String register(Model model) {

		model.addAttribute("hideLogin", true);
		
		updateTabs(model);

		return "Register";
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

		return "Saved";
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

	@GetMapping(value="/addTextToTheme{id}")
  public String addTextToTheme(Model model, @PathVariable long id) {
    model.addAttribute("themeId", id);
    updateTabs(model);

    return "AddText";
	}

	@PostMapping(value="/addTextToTheme{id}Save")
  public String saveTextToTheme(Model model, Text text, @PathVariable long id) {
		Optional<Theme> t = this.themeService.findOne(id);
		if(t.isPresent()){
			if(!t.get().getTexts().contains(text)){
				t.get().getTexts().add(text);
				themeService.save(t.get());
				textService.save(text);
			}
		}
    updateTabs(model);

    return "Saved";
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
		return "/GoToHome";
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
			List<Quote> quotes = quoteService.findByName(name);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResults", quotes.isEmpty());
		}
		model.addAttribute("themeId", id);
		model.addAttribute("search", name);
		
		return "SelectQuote";
	}

	@GetMapping("/deleteQuote{idQuote}FromTheme{idTheme}")
	public String deleteQuoteFromTheme(Model model, @PathVariable long idQuote, @PathVariable long idTheme){
		Optional<Theme> theme = themeService.findOne(idTheme);
		Optional<Quote> quote = quoteService.findOne(idQuote);

		if(theme.isPresent() && quote.isPresent()) {
			if(theme.get().getQuotes().contains(quote.get())){
				theme.get().getQuotes().remove(quote.get());
				themeService.save(themeService.findOne(idTheme).get());
			}
		}

		return "Deleted";
	}

	@GetMapping("/deleteText{idText}FromTheme{idTheme}")
	public String deleteTextFromTheme(Model model, @PathVariable long idText, @PathVariable long idTheme){
		Optional<Theme> theme = themeService.findOne(idTheme);
		Optional<Text> text = textService.findOne(idText);

		if(theme.isPresent() && text.isPresent()) {
			if(!theme.get().getTexts().contains(text.get())){
				theme.get().getTexts().remove(text.get());
				themeService.save(themeService.findOne(idTheme).get());
				textService.delete(idText);
			}
		}

		return "Deleted";
	}

	@GetMapping("/editTheme{id}")
	public String editTheme(Model model, @PathVariable long id) {
		
		Optional<Theme> theme = themeService.findOne(id);
		
		if(theme.isPresent()) {
			model.addAttribute("theme", theme.get());
			model.addAttribute("idTheme", theme.get().getId());
		}
		
		updateTabs(model);
		
		return "EditTheme";
	}

	@PostMapping("/saveEditedTheme{idTheme}")
	public String saveTheme(Model model, Theme theme, @PathVariable Long idTheme) {
		Optional<Theme> oldTheme = themeService.findOne(idTheme);
		
		if(oldTheme.isPresent()){
			oldTheme.get().setName(theme.getName());
			themeService.save(oldTheme.get());
		}
		
		updateTabs(model);

		return "Saved";
	}

	@GetMapping("/error")
	public String error(Model model) {
		
		updateTabs(model);

		return "Error";
	}
    
}
