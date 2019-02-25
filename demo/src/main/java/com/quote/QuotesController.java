package com.quote;

import java.util.List;
import java.util.Optional;

import com.GeneralController;
import com.quote.Quote;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class QuotesController extends GeneralController{

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

		Optional<Quote> quote = quoteService.findOne(id);

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
    
    @GetMapping("/addQuote")
	public String addQuote(Model model) {

		updateTabs(model);

		return "AddQuote";
    }
    
    @PostMapping("/saveQuote")
	public String saveQuote(Model model, Quote quote) {

    List<Quote> list = quoteService.findByNameStrict(quote.getName());
    
		if (list.isEmpty()) {
			quoteService.save(quote);
			updateTabs(model);
			return savedQuote(model);
		}
		
		return repeatedQuote(model);
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
}