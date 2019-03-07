package com.theme;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.Optional;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;

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

	public Page<Theme> findAll(Pageable page) {

		page = new PageRequest(0, pageSize(page));

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

		return repository.findByNameContaining(name, PageRequest.of(0, pageSize(page)));
	}

	public int pageSize(Pageable page){
		return pageSize + pageSize*page.getPageNumber();
	}

	public int getPageNumber(Page<Theme> page){
		return (page.getSize() - pageSize)/pageSize;
	}
	 
	public List<Theme> findAll() {
        return repository.findAll();
	}
	
	public byte[] generatePDF(Long id){
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
			return baos.toByteArray();
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
  
}