package com.security;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;

import com.user.User;
import com.user.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
public class RegisterController {
	
	@Autowired
	private UserRepository uRepository;
	
 	//@RequestMapping(value = "/access/register", method = RequestMethod.POST)
	public String create(String email, String password, String password2, String name, String surname, String nickname, Date birthdate, RedirectAttributes redirectAttrs, HttpServletRequest request) {
		
		boolean samePasswords = password.equals(password2);
		if (!samePasswords) {
			redirectAttrs.addFlashAttribute("hasAnswer", true);
			redirectAttrs.addFlashAttribute("answer", "Las contraseñas son diferentes");
			return "redirect:/access";
		}
		
		try {
			boolean emailExists = uRepository.findByEmail(email) != null;
			
			if (emailExists) {
				redirectAttrs.addFlashAttribute("hasAnswer", true);
				redirectAttrs.addFlashAttribute("answer", "El email que introduciste ya está en uso.");
				return "redirect:/access";
			} else {
				User user = new User(name, email.toLowerCase(), password);
				uRepository.save(user);
				request.login(email, password);
			}
		} catch (Exception ex) {
			System.err.println(ex.toString());
			return "redirect:/Home";
		}

		return "redirect:/";
	}

}