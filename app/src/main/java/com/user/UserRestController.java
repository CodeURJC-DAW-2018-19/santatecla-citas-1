package com.user;

import java.util.ArrayList;
import java.util.List;

import com.GeneralRestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
public class UserRestController extends GeneralRestController {
    
	@GetMapping(value="/login")
	public ResponseEntity<User> logIn() {
		if (this.userComponent.getLoggedUser() != null){
			return new ResponseEntity<>(userComponent.getLoggedUser(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping(value="/login")
	public ResponseEntity<User> logInPRUEBA(@RequestBody User n){
		String username = n.getName();
		String password = n.getPasswordHash();

		User user = this.userService.findByName(username);

		if (user == null) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}

		if (!new BCryptPasswordEncoder().matches(password, user.getPasswordHash())) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {

			userComponent.setLoggedUser(user);

			List<SimpleGrantedAuthority> roles = new ArrayList<>();
			for (String role : user.getRoles()) {
				roles.add(new SimpleGrantedAuthority(role));
			}

			userComponent.setLoggedUser(user);
			
			return new ResponseEntity<>(userComponent.getLoggedUser(), HttpStatus.OK);
		}
	}

	@PostMapping(value="/register")
	public ResponseEntity<User> register(@RequestBody User newUser) {
		if(newUser == null){
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		User findUser = userService.findByName(newUser.getName());

		//If the user is already sign in or already exists
		if((userComponent.getLoggedUser() != null || findUser != null) && !userComponent.isAdmin()){
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}

		User user = new User();
		user.setName(newUser.getName());
		user.setPasswordHash(newUser.getPasswordHash());
		userService.save(user);

		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
	
	
}