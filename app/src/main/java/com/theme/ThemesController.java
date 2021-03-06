package com.theme;

import java.io.File;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import com.GeneralController;
import com.quote.Quote;

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

		home(model, null, null);
		
		model.addAttribute("deleteThemeMessage", true);

		return "Home";
	}

	@GetMapping("/savedTheme")
	public String savedTheme(Model model) {

		home(model, null, null);
		
		model.addAttribute("saveThemeMessage", true);

		return "Home";
	}

	@GetMapping("/repeatedTheme")
	public String repeatedTheme(Model model) {

		home(model, null, null);
	
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
			String fileName = Long.toString(theme.getId());
			themeService.save(theme);

		  if (!file.isEmpty()) {
			  try {
			    File uploadedFile = new File(PROJECT_FOLDER.toFile(), fileName + ".png");
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
		@PathVariable long id) {

		Page<Quote> quotes = quoteService.findByPage(DEFAULT_PAGE);

    	model.addAttribute("quotes", quotes);
		model.addAttribute("themeId", id);
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
		model.addAttribute("id", id);

		return "ThemeRedirect";
	}


	@GetMapping("/addQuoteToTheme/{theme}/selectQuote/{id}")
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
		@RequestParam String name) {

		Pageable page = PageRequest.of(0, 10);
		Page<Quote> quotes = quoteService.findByPage(page);

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

		updateTabs(model);

		return "SelectQuote";
	}

	@GetMapping("/deleteQuote/{idQuote}/FromTheme/{idTheme}")
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
	public ResponseEntity<InputStreamResource> generatePDF(Model model, @PathVariable Long id){
		try{
			InputStream is = this.themeService.generatePDF(id);
			HttpHeaders respHeaders = new HttpHeaders();
			MediaType mediaType = MediaType.parseMediaType("application/pdf");
			respHeaders.setContentType(mediaType);
			InputStreamResource isr = new InputStreamResource(is);
			updateTabs(model);
			return new ResponseEntity<InputStreamResource>(isr, respHeaders, HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<InputStreamResource>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}