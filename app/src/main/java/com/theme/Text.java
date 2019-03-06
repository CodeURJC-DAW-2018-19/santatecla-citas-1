package com.theme;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Text{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String text;

    public Text(){}

    public Text(String text){
        this.text = text;
    }

    public String getText(){
        return this.text;
    }

    public void setText(String text){
        this.text = text;
    }

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
    }

    @Override
    public boolean equals(Object t2){
        Text t = (Text) t2;
        return this.id == t.getId();
    }
}