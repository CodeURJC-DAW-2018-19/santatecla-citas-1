package com.theme;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.quote.*;

@Entity
public class Theme{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String name;

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
}