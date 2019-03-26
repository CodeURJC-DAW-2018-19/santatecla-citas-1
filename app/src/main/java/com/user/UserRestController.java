package com.user;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

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
        if (!userComponent.isLoggedUser()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else {
			User loggedUser = userComponent.getLoggedUser();
            return new ResponseEntity<>(loggedUser, HttpStatus.OK);
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

	public ResponseEntity<Boolean> logOut(HttpSession session) {
        if (!userComponent.isLoggedUser()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else {
            session.invalidate();
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
}
	
	
}