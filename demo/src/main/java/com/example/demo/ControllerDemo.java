package com.example.demo;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ControllerDemo {

	private ArrayList<Theme> themes = new ArrayList<>();
	private ArrayList<Quote> quotes = new ArrayList<>();

	public ControllerDemo(){
		this.themes.add(new Theme("Amor"));
		this.quotes.add(new Quote("No es el sufrimiento en sí mismo el que hace madurar al hombre, es el hombre el que da sentido al sufrimiento", "Alejandro Dumas", "El Conde de Montecristo"));
	}

	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("themes", themes);
		model.addAttribute("quotes", quotes);
		return "Inicio";
	}
	
	@GetMapping("/tema")
	public String tema(Model model) {
		return "Temas";
	}

	@GetMapping("/cita")
	public String cita(Model model) {
		return "Citas";
	}

	@GetMapping("/login")
	public String login(Model model) {
		return "LogIn";
	}

	@GetMapping("/histograma")
	public String histograma(Model model) {
		return "Histograma";
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
