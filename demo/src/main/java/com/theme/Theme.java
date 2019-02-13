package com.theme;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Theme{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String name;

    public Theme(){}

    public Theme(String name){
        this.name = name;
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