package com;

import java.util.Optional;

import com.quote.Quote;
import com.theme.Theme;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ThemeQuotesController extends GeneralController{
	@GetMapping("/deletedTheme")
	public String deletedTheme(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("deleteThemeMessage", true);

		return "Home";
	}

	@GetMapping("/savedTheme")
	public String savedTheme(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("saveThemeMessage", true);

		return "Home";
	}

	@GetMapping("/repeatedTheme")
	public String repeatedTheme(Model model) {

		home(model, null, null , 0, 0);
	
		model.addAttribute("repeatThemeMessage", true);

		return "Home";
	}

	
	@GetMapping("/deletedQuote")
	public String deletedQuote(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("deleteQuoteMessage", true);

		return "Home";
	}

	@GetMapping("/savedQuote")
	public String savedQuote(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("saveQuoteMessage", true);

		return "Home";
	}

	@GetMapping("/repeatedQuote")
	public String repeatedQuote(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("repeatQuoteMessage", true);

		return "Home";
	}

	@GetMapping("/quote/{id}")
	public String showQuote(Model model, @PathVariable long id) {

		Optional<Quote> quote = super.quoteService.findOne(id);

		if (quote.isPresent()) {
			Quote q = quote.get();
			model.addAttribute("quote", q);

			if (!this.userComponent.getLoggedUser().getOpenTabs().contains(q)) {
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
		if (quote.isPresent()) {
			this.userComponent.getLoggedUser().removeTab(quote.get());
		}

		quoteService.delete(id);

		updateTabs(model);

		return deletedQuote(model);
	}

	@GetMapping("/theme/{id}")
	public String showTheme(Model model, @PathVariable long id) {

		Optional<Theme> theme = themeService.findOne(id);

		if (theme.isPresent()) {
			Theme t = theme.get();
			model.addAttribute("theme", t);

			if (!this.userComponent.getLoggedUser().getOpenTabs().contains(t)) {
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
		if (theme.isPresent()) {
			this.userComponent.getLoggedUser().removeTab(theme.get());
		}

		themeService.delete(id);

		updateTabs(model);

		return deletedTheme(model);
	}
}