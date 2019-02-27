package com.theme;

import java.util.List;

import com.quote.Quote;
import com.quote.QuoteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThemeRestController{
    @Autowired
	protected QuoteService quoteService;

	@Autowired
    protected ThemeService themeService;
    
    @GetMapping(value="/themes/")
    public List<Theme> themes(){
        return this.themeService.findAll();
    }

    @GetMapping(value="/quotes/")
    public List<Quote> quotes(){
        return this.quoteService.findAll();
    }
    
}