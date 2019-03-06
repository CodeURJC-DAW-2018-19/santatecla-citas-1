package com.theme;

import java.util.Optional;

import com.quote.Quote;
import com.quote.QuoteService;

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
@RequestMapping("/api/themes")
public class ThemeRestController{

	@Autowired
    protected ThemeService themeService;

    @Autowired
    protected QuoteService quoteService;
    
    @GetMapping(value="/")
    public Page<Theme> themes(@PageableDefault Pageable page){
        return this.themeService.findAll(page);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Theme> concreteThemes(@PathVariable long id){
        Optional<Theme> t = this.themeService.findOne(id);
        if(t.isPresent()){
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/")
    @ResponseStatus(HttpStatus.CREATED)
    public Theme newTheme(@RequestBody Theme theme){
        this.themeService.save(theme);
        return theme;
    }
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Theme> deleteTheme(@PathVariable long id){
        Optional<Theme> t = this.themeService.findOne(id);
        if(t.isPresent()){
            this.themeService.delete(id);
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Theme> updateTheme(@PathVariable long id, @RequestBody Theme theme){
        Optional<Theme> t = this.themeService.findOne(id);
        if(t.isPresent()){
            t.get().update(theme);
            this.themeService.save(t.get());
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/addTextToTheme{id}")
    public ResponseEntity<Theme> addTextToTheme(@RequestBody Text text, @PathVariable long id){
        Optional<Theme> t =this.themeService.findOne(id);
        if(t.isPresent()){
            t.get().getTexts().add(text);
            this.themeService.save(t.get());
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/deleteText{idText}/FromTheme{idTheme}")
    public ResponseEntity<Theme> deleteTextFromTheme(@PathVariable long idText, @PathVariable long idTheme){
        Optional<Theme> t =this.themeService.findOne(idTheme);
        if(t.isPresent()){
            Text text = new Text();
            text.setId(idText);
            if(t.get().getTexts().contains(text)){
                t.get().getTexts().remove(text);
                this.themeService.save(t.get());
                return new ResponseEntity<>(t.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/addQuote{idQuote}ToTheme{idTheme}")
    public ResponseEntity<Theme> addQuoteToTheme(@PathVariable long idQuote, @PathVariable long idTheme){
        Optional<Theme> t =this.themeService.findOne(idTheme);
        Optional<Quote> q = this.quoteService.findOne(idQuote);
        if(t.isPresent()){
            if(q.isPresent()){
                if(!t.get().getQuotes().contains(q.get())){
                    t.get().getQuotes().add(q.get());
                    this.themeService.save(t.get());
                    return new ResponseEntity<>(t.get(), HttpStatus.OK);
                }
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/deleteQuote{idQuote}/FromTheme{idTheme}")
    public ResponseEntity<Theme> deleteQuoteFromTheme(@PathVariable long idQuote, @PathVariable long idTheme){
        Optional<Theme> t =this.themeService.findOne(idTheme);
        Optional<Quote> q = this.quoteService.findOne(idQuote);
        if(t.isPresent()){
            if(q.isPresent()){
                t.get().getQuotes().remove(q.get());
                this.themeService.save(t.get());
                return new ResponseEntity<>(t.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}