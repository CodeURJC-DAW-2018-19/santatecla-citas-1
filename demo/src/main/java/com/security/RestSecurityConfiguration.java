package com.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@Order(1)
public class RestSecurityConfiguration extends WebSecurityConfigurerAdapter{
   
    @Autowired
    protected UserRepositoryAuthProvider userAuthentication;

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        
        http.antMatcher("/api/**");

      

		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/").permitAll();		
		
		// User
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/user").permitAll();		
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/user/?*").hasAnyRole("ADMIN");		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/?*").permitAll();
		
		// Theme
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/theme/**").hasAnyRole("USER", "ADMIN");				
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/theme/generatePDF").hasAnyRole("USER", "ADMIN");
		
		//http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/theme/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/theme/addTheme").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/theme/deleteTheme").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/theme/editTheme").hasAnyRole("ADMIN");
		
		// Quotes
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/quote/**").hasAnyRole("USER", "ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/quote/addQuote").hasAnyRole("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/quote/?*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/quote/editQuote").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/quote/deleteQuote").hasAnyRole("ADMIN");
		
        // Histogram
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/histogram").permitAll();
		
		// Access
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user/login").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user/register").permitAll();
        
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

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
}
