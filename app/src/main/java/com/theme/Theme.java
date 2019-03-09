package com.theme;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.TabElement;
import com.quote.*;

@Entity
public class Theme extends TabElement {
        
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;
    
    private String name;

    private String imagePath;
    
    private String type = "theme";
    private String tabName = "Tema";

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Quote> quotes;

    @ManyToMany(cascade=CascadeType.ALL)
    private List<Text> texts;

    public Theme(){}

    public Theme(String name){
        this.name = name;
        this.quotes = new ArrayList<Quote>();
        this.texts = new ArrayList<Text>();
        this.imagePath = "default-theme.png";
    }

    public List<Quote> getQuotes(){
        return this.quotes;
    }

    public List<Text> getTexts(){
        return this.texts;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        try {
            Theme t = (Theme)o;
            return this.id == t.id;
        } catch (Exception e) {}
        return false;
    }

    public void update(Theme t){
        this.name = t.getName();
    }

    public String getImagePath() {
		return this.imagePath;
    }
    
    public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

}