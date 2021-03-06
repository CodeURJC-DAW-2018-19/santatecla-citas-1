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
import javax.validation.constraints.NotNull;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.TabElement;

@Entity
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

	private ArrayList<TabElement> openTabs = new ArrayList<>();


	public User(long id) {
		this.id = id;
	}

	public User() {
		this.roles = new ArrayList<>();
		this.roles.add("ROLE_USER");
	}

	public User(String name, String password, String... roles) {
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.roles.add("ROLE_USER");
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
		
	public List<TabElement> getOpenTabs() {
		return this.openTabs;
	}

	public void addTab(TabElement te) {
		this.openTabs.add(te);
	}

	public void removeTab(TabElement te) {
		this.openTabs.remove(te);
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", roles=" + roles + ", name=" + name + ", password=" +passwordHash+ "]";
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
}