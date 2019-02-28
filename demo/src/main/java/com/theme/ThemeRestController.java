package com.theme;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThemeRestController{

	@Autowired
    protected ThemeService themeService;
    
    @GetMapping(value="/themes/")
    public List<Theme> themes(){
        return this.themeService.findAll();
    }

    @PostMapping(value="/themes/")
    @ResponseStatus(HttpStatus.CREATED)
    public Theme newTheme(@RequestBody Theme theme){
        this.themeService.save(theme);
        return theme;
    }
    
}