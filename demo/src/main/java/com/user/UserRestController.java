package com.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserRestController{
    
    @Autowired
	private UserComponent userComponent;
	
	@Autowired
	private UserService userService;
}