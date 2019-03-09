package com;

import java.util.ArrayList;
import java.util.List;
import com.theme.Theme;
import com.theme.ThemeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeneralRestController{

	@Autowired
    protected ThemeService themeService;

    private class Histogram {
        private class HistogramNode {
            public String theme;
            public Integer numQuotes;
            public HistogramNode(String t, int n) {
                this.theme = t;
                this.numQuotes = n;
            }
        }
        public List<HistogramNode> histogram = new ArrayList<>();
        public void add(String t, Integer n) {
            this.histogram.add(new HistogramNode(t, n));
        }
    }

    @GetMapping("/histogram")
	public ResponseEntity<Histogram> histogram() {
        List<Theme> savedThemes = this.themeService.findAll();
        Histogram histogram = new Histogram();
        for(Theme t : savedThemes) {
			histogram.add(t.getName(), t.getQuotes().size());
		}
        return new ResponseEntity<Histogram>(histogram, HttpStatus.OK);
    }
    
}