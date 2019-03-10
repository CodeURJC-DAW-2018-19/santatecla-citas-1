package com.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(1)
public class RestSecurityConfiguration extends WebSecurityConfigurerAdapter{
   
    @Autowired
    protected UserRepositoryAuthProvider userAuthentication;

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        
        http.antMatcher("/api/**");
			
		// User
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user").permitAll();	
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user/login").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/user/register").permitAll();	
		
		// Theme
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/themes/").hasAnyRole("USER", "ADMIN");	
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/themes/{id}").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/themes/image/{id}").hasAnyRole("USER","ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/themes/PDF{id}").hasAnyRole("USER", "ADMIN");
        
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/themes/{id}/image").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/themes/").hasAnyRole("ADMIN");			
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/themes/addTextToTheme{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/themes/addQuote{idQuote}ToTheme{idTheme}").hasAnyRole("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/themes/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/themes/deleteText{idText}/FromTheme{idTheme}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/themes/deleteQuote{idQuote}/FromTheme{idTheme}").hasAnyRole("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/themes/{id}").hasAnyRole("ADMIN");
		
		// Quotes
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/quotes/").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/quotes/{id}").hasAnyRole("USER", "ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/quotes/").hasAnyRole("ADMIN");
        
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/quotes/{id}").hasAnyRole("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/quotes/{id}").hasAnyRole("ADMIN");
		
        // Histogram
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/histogram").permitAll();
		
        // Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> { });
		
		// Use HTTP basic authentication
		http.httpBasic();

        // Disable CSRF
        http.csrf().disable();
        
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(userAuthentication);

    }
    
}
