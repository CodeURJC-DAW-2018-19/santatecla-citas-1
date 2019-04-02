package com.theme;

import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;
import java.nio.file.Files;
import java.nio.file.Path;

import javax.servlet.http.HttpServletResponse;

import com.GeneralRestController;
import com.quote.Quote;

import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/themes")
public class ThemeRestController extends GeneralRestController {

    interface VisitorView extends Theme.Visitor{}
    interface LoggedView extends Quote.Logged{}
    
    @GetMapping(value="/")
    public MappingJacksonValue themes(@PageableDefault Pageable page){
        MappingJacksonValue result = new MappingJacksonValue(this.themeService.findAll(page));
        if (userComponent.isLoggedUser()) {
            result.setSerializationView(LoggedView.class);
        } else {
            result.setSerializationView(VisitorView.class);
        }
        return result;      
    }

    @GetMapping(value="/size")
    public long qthemesSize() {
        return this.themeService.findSize();
    }

    @GetMapping(value="/search/{name}")
    public MappingJacksonValue searchThemes(@PageableDefault Pageable page, @PathVariable String name){
        MappingJacksonValue result = new MappingJacksonValue(this.themeService.findByName(name, page));
        if (userComponent.isLoggedUser()) {
            result.setSerializationView(LoggedView.class);
        } else {
            result.setSerializationView(VisitorView.class);
        }
        return result;      
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Theme> concreteThemes(@PathVariable long id){
        Optional<Theme> t = this.themeService.findOne(id);
        if(t.isPresent()){
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/")
    @ResponseStatus(HttpStatus.CREATED)
    public Theme newTheme(@RequestBody Theme theme){
        this.themeService.save(theme);
        return theme;
    }

    @RequestMapping(value = "/{id}/image", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Theme> uploadThemeImage(@PathVariable long id, @RequestParam("file") MultipartFile file) {
		
		Optional<Theme> theme = themeService.findOne(id);
		
		if (theme == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		if (file == null || file.isEmpty())
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
		try {
			imageService.uploadThemeImage(theme, file);
			return new ResponseEntity<Theme>(theme.get(), HttpStatus.OK);
		}
		catch (IOException ex) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}			
    }
    
    @RequestMapping(value = "/{id}/image", method = RequestMethod.GET)
	public ResponseEntity<Theme> getThemeImage(@PathVariable long id, HttpServletResponse res) {

		Optional<Theme> theme = themeService.findOne(id);
		
		if (theme == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            
        Path image = imageService.handleFileDownload(id);

        if (!Files.exists(image))
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		try {
			imageService.downloadImage(res, image);
			return new ResponseEntity<>(theme.get(), HttpStatus.OK);	
		}
		catch (IOException io) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Theme> deleteTheme(@PathVariable long id){
        Optional<Theme> t = this.themeService.findOne(id);
        if(t.isPresent()){
            this.themeService.delete(id);
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Theme> updateTheme(@PathVariable long id, @RequestBody Theme theme){
        Optional<Theme> t = this.themeService.findOne(id);
        if(t.isPresent()){
            t.get().update(theme);
            this.themeService.save(t.get());
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/{id}/text")
    public ResponseEntity<Theme> addTextToTheme(@RequestBody Text text, @PathVariable long id){
        Optional<Theme> t =this.themeService.findOne(id);
        if(t.isPresent()){
            t.get().getTexts().add(text);
            this.themeService.save(t.get());
            return new ResponseEntity<>(t.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/{idTheme}/text/{idText}")
    public ResponseEntity<Theme> deleteTextFromTheme(@PathVariable long idText, @PathVariable long idTheme){
        
        Optional<Theme> t =this.themeService.findOne(idTheme);
        
        if(t.isPresent()){
            Text text = new Text();
            text.setId(idText);
            if(t.get().getTexts().contains(text)){
                t.get().getTexts().remove(text);
                this.themeService.save(t.get());
                return new ResponseEntity<>(t.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/{idTheme}/quote/{idQuote}")
    public ResponseEntity<Theme> addQuoteToTheme(@PathVariable long idQuote, @PathVariable long idTheme){
        
        Optional<Theme> t =this.themeService.findOne(idTheme);
        Optional<Quote> q = this.quoteService.findOne(idQuote);
        
        if(t.isPresent()){
            if(q.isPresent()){
                if(!t.get().getQuotes().contains(q.get())){
                    t.get().getQuotes().add(q.get());
                    this.themeService.save(t.get());
                    return new ResponseEntity<>(t.get(), HttpStatus.OK);
                }
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/{idTheme}/quote/{idQuote}")
    public ResponseEntity<Theme> deleteQuoteFromTheme(@PathVariable long idQuote, @PathVariable long idTheme){
        
        Optional<Theme> t =this.themeService.findOne(idTheme);
        Optional<Quote> q = this.quoteService.findOne(idQuote);
        
        if(t.isPresent()){
            if(q.isPresent()){
                t.get().getQuotes().remove(q.get());
                this.themeService.save(t.get());
                return new ResponseEntity<>(t.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}/PDF", produces = "application/pdf")
    public ResponseEntity<InputStreamResource> downloadPDFFile(@PathVariable long id){
        try{
            if(this.themeService.findOne(id).isPresent()){
                InputStream is = this.themeService.generatePDF(id);
                HttpHeaders respHeaders = new HttpHeaders();
                MediaType mediaType = MediaType.parseMediaType("application/pdf");
                respHeaders.setContentType(mediaType);
                InputStreamResource isr = new InputStreamResource(is);
                return new ResponseEntity<InputStreamResource>(isr, respHeaders, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}