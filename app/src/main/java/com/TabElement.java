package com;

public class TabElement {
    
    public interface Visitor {}
    public interface Logged {}

    protected boolean active;

    public void setActive(boolean b) {
        this.active = b;
    }
}