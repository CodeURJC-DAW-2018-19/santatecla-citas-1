package com;

import com.image.ImageService;
import com.quote.QuoteService;
import com.theme.Histogram;
import com.theme.ThemeService;
import com.user.UserComponent;
import com.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeneralRestController{

    protected interface Visitor {}
    protected interface Logged {}

    protected final int PAGE_SIZE = 6;
	protected final Pageable DEFAULT_PAGE = PageRequest.of(0, PAGE_SIZE);
    
    @Autowired
    protected QuoteService quoteService;
    
	@Autowired
    protected ThemeService themeService;
    
    @Autowired
	protected UserComponent userComponent;
	
	@Autowired
	protected UserService userService;

    @Autowired
    protected ImageService imageService;
    
    @Autowired
    protected JsonAdapter jsonAdapter;


    @GetMapping("/histogram")
	public ResponseEntity<Histogram> histogram() {

        return new ResponseEntity<Histogram>(this.themeService.getHistogram(), HttpStatus.OK);

    }
    
}