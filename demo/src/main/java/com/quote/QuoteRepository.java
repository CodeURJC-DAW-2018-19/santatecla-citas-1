package com.quote;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteRepository extends JpaRepository<Quote, Long> {
        
    public List<Quote> findByQuoteContaining(String quote);
    public List<Quote> findByAuthorContaining(String author);
    public List<Quote> findByBookContaining(String book);
}