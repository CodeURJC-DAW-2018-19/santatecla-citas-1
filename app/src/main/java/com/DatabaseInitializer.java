package com;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.theme.*;
import com.quote.*;
import com.user.*;

@Component
public class DatabaseInitializer {

	@Autowired
    private QuoteRepository quoteRepository;
    
    @Autowired
    private ThemeRepository themeRepository;
    
    @Autowired
	private UserRepository userRepository;

	@PostConstruct
	public void init() {

        // Quotes
        Quote quote0 = new Quote("El misterio de la vida no es un problema a resolver, sino una realidad a experimentar.", "Frank Herbert", "Duna");
        Quote quote1 = new Quote("Estar solo no tiene nada que ver con cuantas personas hay alrededor.","Richard Yates","Revolutionary Road");
        Quote quote2 = new Quote("Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra.","Mary Shelley","Frankestein");
        Quote quote3 = new Quote("El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación.","Arthur Conan Doyle","La compañía blanca");
        Quote quote4 = new Quote("Si buscas la perfección nunca estarás contento.","Leo Tolstoy","Anna Karenina");
       
        Quote quote5 = new Quote("No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir.","Carlos Ruiz Zafón","El Juego del Ángel");
        Quote quote6 = new Quote("Tengo esperanza o podría no vivir.", "H.G. Wells", "La isla del doctor Moreau" );
        Quote quote7 = new Quote("Llamo a la gente “rica” cuando son capaces de satisfacer las necesidades de su imaginación.","Henry James","El retrato de una dama");
        Quote quote8 = new Quote("El sol es débil cuando se eleva primero, y cobra fuerza y coraje a medida que avanza el día.","Charles Dickens","Vieja tienda de curiosidades");
        Quote quote9 = new Quote("Es en las noches de diciembre, cuando el termómetro está a cero, cuando más pensamos en el sol.","Victor Hugo","Los miserables");
        
        Quote quote10 = new Quote("Mi consejo es: nunca hagas mañana lo que puedes hacer hoy. La procrastinación es la ladrona del tiempo.","Charles Dickens","David Copperfield");
        Quote quote11 = new Quote("Luchar hasta el último aliento.","William Shakespeare","Enrique VI");
        Quote quote12 = new Quote("Deja de preocuparte por envejecer y piensa en crecer.","Philip Roth","El animal moribundo");
        Quote quote13 = new Quote("No todo lo que es de oro reluce, ni toda la gente errante anda perdida.","J.R.R. Tolkien","El Señor de los Anillos");
        Quote quote14 = new Quote("Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama.","Miguel de Cervantes","Don Quijote de la Mancha");

        // Save quotes
        
        quoteRepository.save(quote0);
        quoteRepository.save(quote1);
        quoteRepository.save(quote2);
        quoteRepository.save(quote3);
        quoteRepository.save(quote4);

        quoteRepository.save(quote5);
        quoteRepository.save(quote6);
        quoteRepository.save(quote7);
        quoteRepository.save(quote8);
        quoteRepository.save(quote9);
         
        quoteRepository.save(quote10);
        quoteRepository.save(quote11);
        quoteRepository.save(quote12);
        quoteRepository.save(quote13);
        quoteRepository.save(quote14);

        //Themes
        Theme amor = new Theme("Amor");
        Theme sabiduria = new Theme("Sabiduria");
        Theme valores = new Theme("Valores");
        Theme vida = new Theme("Vida");
        Theme esperanza = new Theme("Esperanza");

        amor.getQuotes().add(quote9);
        amor.getQuotes().add(quote14);

        sabiduria.getQuotes().add(quote8);
        sabiduria.getQuotes().add(quote13);

        valores.getQuotes().add(quote2);
        valores.getQuotes().add(quote3);
        valores.getQuotes().add(quote4);
        valores.getQuotes().add(quote7);
        valores.getQuotes().add(quote10);
        valores.getQuotes().add(quote11);
        valores.getQuotes().add(quote12);

        vida.getQuotes().add(quote0);
        vida.getQuotes().add(quote1);
        vida.getQuotes().add(quote5);

        esperanza.getQuotes().add(quote6);
        
        // Save themes
		themeRepository.save(amor);
        themeRepository.save(sabiduria);
        themeRepository.save(valores);
        themeRepository.save(vida);
        themeRepository.save(esperanza);

        // Sample users
		userRepository.save(new User("user", "pass"));
        userRepository.save(new User("admin", "pass", "ROLE_ADMIN"));
        userRepository.save(new User("student", "pass"));

	}

}