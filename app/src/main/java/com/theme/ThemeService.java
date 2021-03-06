package com.theme;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import com.theme.Histogram;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfWriter;
import com.quote.Quote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ThemeService {

	private int pageSize = 6;

	@Autowired
	private ThemeRepository repository;

	public Optional<Theme> findOne(long id) {
		return repository.findById(id);
	}

	public Page<Theme> findByPage(Pageable page) {
		return repository.findAll(page);
	}

	public void save(Theme theme) {
		repository.save(theme);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}

	public List<Theme> findByName(String name) {
        return repository.findByNameContaining(name);
  	}

  	public Page<Theme> findByName(String name, Pageable page) {
		return repository.findByNameContaining(name, page);
	}
	 
	public List<Theme> findAll() {
        return repository.findAll();
	}

	public int findSize(){
		return repository.findAll().size();
	}
	
	public InputStream generatePDF(Long id){
		try{
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			Document document = new Document();
			PdfWriter.getInstance(document, baos);
			document.open();
			Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN, 16, BaseColor.BLACK);
			Phrase phrase;
			List<Quote> quotes = this.findOne(id).get().getQuotes();
			List<Text> texts = this.findOne(id).get().getTexts();
			Optional<Theme> t = this.findOne(id);

			if(t.isPresent()){
				phrase = new Phrase(t.get().getName() + "\n" + "\n", FontFactory.getFont(FontFactory.TIMES_ROMAN, 20, BaseColor.BLACK));
				document.add(phrase);
			}
			for(int i = 0; i<quotes.size(); i++){
				phrase = new Phrase("\"" + quotes.get(i).getName() + "\"" + "\n" + "- " + quotes.get(i).getAuthor() + " en " + quotes.get(i).getBook() + "\n" + "\n", font);
				document.add(phrase);
			}
			for(int i = 0; i<texts.size(); i++){
				phrase = new Phrase(texts.get(i).getText() + "\n", font);
				document.add(phrase);
			}
			
			document.close();
			return new ByteArrayInputStream(baos.toByteArray());
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	public Histogram getHistogram() {
		List<Theme> themes = this.findAll();
		Histogram histogram = new Histogram();
		for(Theme t : themes) {
			histogram.add(t.getName(), t.getQuotes().size());
		}
		return histogram;
	}

}