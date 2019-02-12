package com;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class WebController {

	private ArrayList<Theme> themes = new ArrayList<>();
	private ArrayList<Quote> quotes = new ArrayList<>();

	public WebController(){
		this.themes.add(new Theme("Amor"));
		this.quotes.add(new Quote("No es el sufrimiento en sí mismo el que hace madurar al hombre, es el hombre el que da sentido al sufrimiento", "Alejandro Dumas", "El Conde de Montecristo"));
	}

	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("themes", themes);
		model.addAttribute("quotes", quotes);
		return "Home";
	}
	
	@GetMapping("/tema")
	public String theme(Model model) {
		return "Themes";
	}

	@GetMapping("/cita")
	public String quote(Model model) {
		return "Quotes";
	}

	@GetMapping("/login")
	public String login(Model model) {
		return "LogIn";
	}

	@GetMapping("/histograma")
	public String histogram(Model model) {
		return "Histogram";
	}

	@GetMapping(value="/addTheme")
	public String addTheme(Model model) {
		return "AddTheme";
	}
	
	@GetMapping(value="/theme/new")
    public String newTheme(Model model, Theme theme) {
		themes.add(theme);
        return "SavedTheme";
	}

	@GetMapping(value="/addQuote")
	public String addQuote(Model model) {
		return "AddQuote";
	}

	@GetMapping(value="/quote/new")
    public String newQuote(Model model, Quote quote) {
		quotes.add(quote);
        return "SavedQuote";
	}
    
}
