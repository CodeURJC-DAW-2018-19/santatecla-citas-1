package com.quote;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.TabElement;

@Entity
public class Quote extends TabElement{
        
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String quote;
    private String author;
    private String book;
    private String type = "quote";
    private String tabName = "Cita";

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

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
    }
    
    @Override
    public boolean equals(Object o) {
        try {
            Quote q = (Quote)o;
            return this.id == q.id;
        } catch (Exception e) {}
        return false;
    }

    public void update(Quote q1){
        if(q1.getName()!=null){
            this.quote = q1.getName();
        }
        if(q1.getAuthor() != null){
            this.author = q1.getAuthor();
        }
        if(q1.getBook() != null){
            this.book = q1.getBook();
        }
    }

}