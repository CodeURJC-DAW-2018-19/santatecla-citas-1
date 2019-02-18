package com.theme;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.TabElement;
import com.quote.*;

@Entity
public class Theme extends TabElement {
        
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;
    
    private String name;
    private String type = "theme";
    private String tabName = "Tema";

    @OneToMany
    private List<Quote> quotes;

    public Theme(){}

    public Theme(String name){
        this.name = name;
        this.quotes = new ArrayList<Quote>();
    }

    public List<Quote> getQuotes(){
        return this.quotes;
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

}