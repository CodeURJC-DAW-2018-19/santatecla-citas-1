package com.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/user")
public class UserRestController{
    
    @Autowired
	private UserComponent userComponent;
	
	@Autowired
	private UserService userService;

	@GetMapping(value="/logIn")
	public ResponseEntity<User> logIn() {
		if (userComponent.getLoggedUser() != null){
			return new ResponseEntity<>(userComponent.getLoggedUser(), HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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