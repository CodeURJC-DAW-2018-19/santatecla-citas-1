package com.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.TabElement;
import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
//@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	private String name;

	@NotNull
	private String passwordHash;

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	public User() {
	}


	public User(String name, String password, String... roles) {
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}

	public User(String name, String password) {
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.name = name;

		this.roles = Arrays.asList("ROLE_USER");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public void setPasswordHash(String passwordHash) {
		this.passwordHash = new BCryptPasswordEncoder().encode(passwordHash);
	}

	public void setPassword(String passwordHash) {
		this.passwordHash = passwordHash;
	}	

	
	public String getPasswordHash() {
		return passwordHash;
	}


	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	private ArrayList<TabElement> openTabs = new ArrayList();
		
	public List<TabElement> getOpenTabs() {
		return this.openTabs;
	}

	public void addTab(TabElement te) {
		this.openTabs.add(te);
	}

	public void removeTab(TabElement te) {
		this.openTabs.remove(te);
	}

	public void setActive(TabElement te) {
		if (te == null) {
			for (TabElement t : openTabs) {
				t.setActive(false);			
			}
		} else {
			for (TabElement t : openTabs) {
				if (t.equals(te)) {
					t.setActive(true);
				} else {
					t.setActive(false);
				}
			}
		}
	}


	/*@Override
	public boolean equals(Object other) {
		if (this == other)
			return true;
		if (!(other instanceof User))
			return false;
		return id == ((User) other).getId();
	}*/

}