package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerDemo {
	@GetMapping("/")
	public String home(Model model) {
		return "Inicio";
	}
}
