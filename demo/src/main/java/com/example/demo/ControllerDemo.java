package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ControllerDemo {
	
	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("name", "Inicio");
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

}
