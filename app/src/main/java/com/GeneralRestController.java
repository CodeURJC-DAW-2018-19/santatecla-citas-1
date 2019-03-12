package com;

import com.theme.Histogram;
import com.theme.ThemeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeneralRestController{

	@Autowired
    protected ThemeService themeService;

    @GetMapping("/histogram")
	public ResponseEntity<Histogram> histogram() {

        return new ResponseEntity<Histogram>(this.themeService.getHistogram(), HttpStatus.OK);

    }
    
}