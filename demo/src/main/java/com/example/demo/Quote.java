package com.example.demo;

public class Quote{
    private String quote;
    private String author;
    private String book;


    public Quote(){}

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