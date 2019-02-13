package com;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Quote{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String quote;
    private String author;
    private String book;

    protected Quote(){}

    public Quote(String name, String author, String book){
        this.quote = name;
        this.author = author;
        this.book = book;
    }

    public String getName(){
        return this.quote;
    }

    public void setName(String name){
        this.quote = name;
    }

    public String getAuthor(){
        return this.author;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public String getBook(){
        return this.book;
    }

    public void setBook(String book){
        this.book = book;
    }
}