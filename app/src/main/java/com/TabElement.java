package com;

public class TabElement {
    
    public interface Visitor {}
    public interface Logged extends Visitor{}

    protected boolean active;

    public void setActive(boolean b) {
        this.active = b;
    }
}