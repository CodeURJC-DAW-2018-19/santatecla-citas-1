package com.theme;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;
import java.util.Optional;

import com.GeneralController;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfWriter;
import com.quote.Quote;
import com.theme.Text;
import com.theme.Theme;

import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("/theme")
public class ThemesController extends GeneralController{
	@GetMapping("/deletedTheme")
	public String deletedTheme(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("deleteThemeMessage", true);

		return "Home";
	}

	@GetMapping("/savedTheme")
	public String savedTheme(Model model) {

		home(model, null, null , 0, 0);
		
		model.addAttribute("saveThemeMessage", true);

		return "Home";
	}

	@GetMapping("/repeatedTheme")
	public String repeatedTheme(Model model) {

		home(model, null, null , 0, 0);
	
		model.addAttribute("repeatThemeMessage", true);

		return "Home";
	}

	@GetMapping("/{id}")
	public String showTheme(Model model, @PathVariable long id) {

		Optional<Theme> theme = themeService.findOne(id);

		if (theme.isPresent()) {
			Theme t = theme.get();
			model.addAttribute("theme", t);

			if (!this.userComponent.getLoggedUser().getOpenTabs().contains(t)) {
				this.userComponent.getLoggedUser().addTab(t);
			}
			this.userComponent.getLoggedUser().setActive(t);
		}

		updateTabs(model);
		model.addAttribute("idTheme", id);
		
		return "Themes";
	}

	@GetMapping("/deleteTheme/{id}")
	public String deleteTheme(Model model, @PathVariable long id) {

		Optional<Theme> theme = themeService.findOne(id);
		if (theme.isPresent()) {
			this.userComponent.getLoggedUser().removeTab(theme.get());
		}

		themeService.delete(id);

		updateTabs(model);

		return deletedTheme(model);
	}

	@GetMapping("/addTheme")
	public String addTheme(Model model) {

		updateTabs(model);

		return "AddTheme";
	}

	@PostMapping("/saveTheme")
	public String saveTheme(Model model, @RequestParam("name") String name, 
	@RequestParam("file") MultipartFile file){

		Theme theme = new Theme(name);
    
    List<Theme> list = themeService.findByName(theme.getName());
    
		if (list.isEmpty()) {
			themeService.save(theme);
      String fileName = "image-" + theme.getId() + ".jpg";

		  if (!file.isEmpty()) {
			  try {
			    File uploadedFile = new File(FILES_FOLDER.toFile(), fileName);
			    file.transferTo(uploadedFile);
			  } catch (Exception e) {
					model.addAttribute("error", e.getClass().getName() + ":" + e.getMessage());
			  }
		  }
			updateTabs(model);
			return savedTheme(model);
		}

		return repeatedTheme(model);
	}

	@GetMapping(value="/addQuoteToTheme/{id}")
	public String addQuoteToTheme(
		Model model, 
		@PathVariable long id, 
		@RequestParam(value="page", required=false) Integer pageNum) {

		if(pageNum == null) pageNum = 0;

		Pageable page = PageRequest.of(pageNum, 10);
		Page<Quote> quotes = quoteService.findAll(page);

    model.addAttribute("quotes", quotes);
		model.addAttribute("themeId", id);
		model.addAttribute("showNextQuotesToSelect", !quotes.isLast());
		model.addAttribute("nextPageSelectQuote", quoteService.getPageNumber(quotes) +1);
		model.addAttribute("search", "");
    updateTabs(model);

    return "SelectQuote";
	}

	@GetMapping(value="/addTextToTheme/{id}")
  public String addTextToTheme(Model model, @PathVariable long id) {
    model.addAttribute("themeId", id);
    updateTabs(model);

    return "AddText";
	}

	@PostMapping(value="/addTextToTheme/{id}/Save")
  public String saveTextToTheme(Model model, String text, @PathVariable long id) {

		Optional<Theme> theme = this.themeService.findOne(id);
		Text t = new Text(text);

		if(theme.isPresent()){
			if(!theme.get().getTexts().contains(t)){
				theme.get().getTexts().add(t);
				themeService.save(theme.get());
			}
		}

    updateTabs(model);

    return showTheme(model, id);
	}


	@GetMapping("/addQuoteToTheme/{theme}/selectQuote{id}")
  public String selectQuote(Model model, @PathVariable long id, @PathVariable long theme) {

			Optional<Quote> quote = quoteService.findOne(id);
			
      if(quote.isPresent()) {
				if(!(themeService.findOne(theme).get().getQuotes().contains(quote.get()))){
					themeService.findOne(theme).get().getQuotes().add(quote.get());
					themeService.save(themeService.findOne(theme).get());
				}
      }

			updateTabs(model);

			return showTheme(model, theme);
	}
		
	@GetMapping("/addQuoteToTheme/{id}/searchQuotes")
	public String selectQuoteSearch(Model model, 
		@PathVariable long id, 
		@RequestParam String name,
		@RequestParam(value="page", required=false) Integer pageNum) {

		if(pageNum == null) pageNum = 0;

		Pageable page = PageRequest.of(pageNum, 10);
		Page<Quote> quotes = quoteService.findAll(page);

		if (name.equals("")) {
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", false);
		} else {
			quotes = quoteService.findByName(name, page);
			model.addAttribute("quotes", quotes);
			model.addAttribute("searchQuotes", true);
			model.addAttribute("noResults", quotes.isEmpty());
		}
		model.addAttribute("search", name);
		model.addAttribute("themeId", id);
		model.addAttribute("search", name);
		model.addAttribute("showNextQuotesToSelect", !quotes.isLast());
		model.addAttribute("nextPageSelectQuote", quoteService.getPageNumber(quotes) +1); 

		updateTabs(model);

		return "SelectQuote";
	}

	@GetMapping("/deleteQuote{idQuote}/FromTheme{idTheme}")
	public String deleteQuoteFromTheme(Model model, @PathVariable long idQuote, @PathVariable long idTheme){
		Optional<Theme> theme = themeService.findOne(idTheme);
		Optional<Quote> quote = quoteService.findOne(idQuote);

		if(theme.isPresent() && quote.isPresent()) {
			if(theme.get().getQuotes().contains(quote.get())){
				theme.get().getQuotes().remove(quote.get());
				themeService.save(themeService.findOne(idTheme).get());
			}
		}

		updateTabs(model);

		return showTheme(model, idTheme);
	}

	@GetMapping("/deleteText/{idText}/FromTheme/{idTheme}")
	public String deleteTextFromTheme(Model model, @PathVariable int idText, @PathVariable long idTheme){
		Optional<Theme> theme = themeService.findOne(idTheme);

		if(theme.isPresent()) {
			theme.get().getTexts().remove(theme.get().getTexts().get(idText-1));
			themeService.save(themeService.findOne(idTheme).get());
		}

		updateTabs(model);

		return showTheme(model, idTheme);
	}

	@GetMapping("/editTheme/{id}")
	public String editTheme(Model model, @PathVariable long id) {
		
		Optional<Theme> theme = themeService.findOne(id);
		
		if(theme.isPresent()) {
			model.addAttribute("theme", theme.get());
			model.addAttribute("idTheme", theme.get().getId());
		}
		
		updateTabs(model);
		
		return "EditTheme";
	}

	@PostMapping("/saveEditedTheme/{idTheme}")
	public String saveTheme(Model model, Theme theme, @PathVariable Long idTheme) {
		
		Optional<Theme> oldTheme = themeService.findOne(idTheme);
		
		if(oldTheme.isPresent()){
			oldTheme.get().setName(theme.getName());
			themeService.save(oldTheme.get());
		}
		
		updateTabs(model);

    return showTheme(model, idTheme);
	}

	@GetMapping("/generatePDF/{id}")
	public String generatePDF(Model model, @PathVariable Long id){
		try{
			Document document = new Document();
			PdfWriter.getInstance(document, new FileOutputStream("Tema.pdf"));
			
			document.open();
			Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN, 16, BaseColor.BLACK);
			Phrase phrase;
			List<Quote> quotes = this.themeService.findOne(id).get().getQuotes();
			List<Text> texts = this.themeService.findOne(id).get().getTexts();
			Optional<Theme> t = this.themeService.findOne(id);

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
		} catch(Exception e){
			e.printStackTrace();
		}
		
		updateTabs(model);

		return "GeneratedPDF";
	}

	@GetMapping(value="/getpdf")
	public ResponseEntity<InputStreamResource> getPDF1() {
		try{
				File file = new File("Tema.pdf");
				HttpHeaders respHeaders = new HttpHeaders();
				MediaType mediaType = MediaType.parseMediaType("application/pdf");
				respHeaders.setContentType(mediaType);
				respHeaders.setContentLength(file.length());
				respHeaders.setContentDispositionFormData("attachment", file.getName());
				InputStreamResource isr = new InputStreamResource(new FileInputStream(file));
				return new ResponseEntity<InputStreamResource>(isr, respHeaders, HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<InputStreamResource>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}