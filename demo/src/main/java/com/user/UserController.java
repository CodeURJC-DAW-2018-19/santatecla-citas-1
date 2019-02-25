package com.user;

import com.GeneralController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController extends GeneralController{
    
  @ModelAttribute
	public void addUserToModel(Model model) {
		Boolean logged = (userComponent.isLoggedUser());
		model.addAttribute("logged", logged);

		if (logged) {
			model.addAttribute("admin", userComponent.getLoggedUser().getRoles().contains("ROLE_ADMIN"));
			model.addAttribute("userName", userComponent.getLoggedUser().getName());
		}
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

		model.addAttribute("hideLogin", false);

		updateTabs(model);

		return "Register";
  }
    
  @PostMapping("/saveUser")
	public String saveUser(Model model, User user) {

		User u = userService.findByName(user.getName());
		if (u == null) {
			userService.save(user);
			updateTabs(model);
			return "/login";
		}

		return "Error";
	}
}