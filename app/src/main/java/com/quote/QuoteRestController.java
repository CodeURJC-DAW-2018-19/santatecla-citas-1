package com.quote;

import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quotes")
public class QuoteRestController{

    interface VisitorView extends Quote.Visitor{}

    @Autowired
	protected QuoteService quoteService;

    @GetMapping(value="/")
    public Page<Quote> quotes(@PageableDefault Pageable page){
        return this.quoteService.findAll(page);
    }

    @GetMapping(value="/visitor")
    @JsonView(VisitorView.class)
    public Page<Quote> quotesVisitor(@PageableDefault Pageable page){
        return this.quoteService.findAll(page);
    }
    
    @GetMapping(value="/{id}")
    public ResponseEntity<Quote> concreteQuote(@PathVariable long id){
        Optional<Quote> q = this.quoteService.findOne(id);
        if(q.isPresent()){
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/")
    @ResponseStatus(HttpStatus.CREATED)
    public Quote newQuote(@RequestBody Quote quote){
        this.quoteService.save(quote);
        
        return quote;
    }
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Quote> deleteQuote(@PathVariable long id){
        Optional<Quote> q = this.quoteService.findOne(id);
        
        if(q.isPresent()){
            this.quoteService.delete(id);
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Quote> updateQuote(@PathVariable long id, @RequestBody Quote quote){
        Optional<Quote> q = this.quoteService.findOne(id);
        
        if(q.isPresent()){
            q.get().update(quote);
            this.quoteService.save(q.get());
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}