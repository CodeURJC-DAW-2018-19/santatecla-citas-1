package com.quote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuoteRestController{
    @Autowired
	protected QuoteService quoteService;

    @GetMapping(value="/quotes/")
    public Page<Quote> quotes(@PageableDefault Pageable page){
        return this.quoteService.findAll(page);
    }
    
}