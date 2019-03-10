package com.image;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ImageController {
	
	@Autowired
	private ImageService imageService;
	

	@RequestMapping("/themes-images/{id}")
	public void handleFileDownload(@PathVariable long id, HttpServletResponse res)
			throws FileNotFoundException, IOException {
		Path img = imageService.handleFileDownload(id);
        if (img.toFile().exists()) {
            res.setContentType("img/png");
            res.setContentLength((int) img.toFile().length());
            FileCopyUtils.copy(Files.newInputStream(img), res.getOutputStream());
        }
    }
    
}