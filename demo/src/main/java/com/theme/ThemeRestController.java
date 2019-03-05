package com.theme;

import java.util.Optional;

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
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}