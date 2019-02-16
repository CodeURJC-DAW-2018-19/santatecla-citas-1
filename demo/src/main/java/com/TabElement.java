package com;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TabElement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;
        
}