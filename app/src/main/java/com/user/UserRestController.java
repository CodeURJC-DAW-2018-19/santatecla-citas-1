package com.user;

import com.GeneralRestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
		System.out.println(n.getName());
		if(n.getName().equals("admin")){
			return new ResponseEntity<>(n, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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