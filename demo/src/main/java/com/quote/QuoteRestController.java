package com.quote;

import java.util.List;

import com.quote.Quote;
import com.quote.QuoteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuoteRestController{
    @Autowired
	protected QuoteService quoteService;

    @GetMapping(value="/quotes/")
    public List<Quote> quotes(){
        return this.quoteService.findAll();
    }
    
}