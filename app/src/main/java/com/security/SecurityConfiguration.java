package com.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    protected UserRepositoryAuthProvider authenticationProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        
        // Public pages
        http.authorizeRequests().antMatchers("/assets/**").permitAll();
        http.authorizeRequests().antMatchers("/themes-images/*").permitAll();
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/close/**").permitAll();
        http.authorizeRequests().antMatchers("/histogram").permitAll();
        http.authorizeRequests().antMatchers("/user/login").permitAll();
        http.authorizeRequests().antMatchers("/user/register").permitAll();
        http.authorizeRequests().antMatchers("/user/saveUser").permitAll();
        http.authorizeRequests().antMatchers("/new/**").permitAll();

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/quote/*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/theme/*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/theme/generatePDF/*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/theme/getpdf").hasAnyRole("USER");
        http.authorizeRequests().anyRequest().hasAnyRole("ADMIN");

        // Login form
        http.formLogin().loginPage("/user/login");
        http.formLogin().usernameParameter("username");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/");
        http.formLogin().failureUrl("/user/login");

        // Logout
        http.logout().logoutUrl("/user/logout");
        http.logout().logoutSuccessUrl("/");

        // Disable CSRF
        http.csrf().disable();
        
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.authenticationProvider(authenticationProvider);

    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
