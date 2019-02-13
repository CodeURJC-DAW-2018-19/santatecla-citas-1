package com.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        
    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/login").permitAll();

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/Home").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/AddQuote").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/AddTheme").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/SavedQuote").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/SavedTheme").hasAnyRole("ADMIN");

        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("username");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/home");
        http.formLogin().failureUrl("/loginerror");

        // Logout
        http.logout().logoutUrl("/logout");
        http.logout().logoutSuccessUrl("/");
        
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        
    	// User
        auth.inMemoryAuthentication().withUser("user").password("pass").roles("USER");
    }

}
