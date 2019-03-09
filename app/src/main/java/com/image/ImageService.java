package com.image;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.theme.*;

@Service
public class ImageService {
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"));

	@Autowired
	private ThemeService themeService;
	
	
	@PostConstruct
	public void init() throws IOException {

		if (!Files.exists(FILES_FOLDER)) 
			Files.createDirectories(FILES_FOLDER);
	}
	
	public void uploadThemeImage(Optional<Theme> theme, MultipartFile file) throws IOException {
		
		String imageName = "img-theme-" + theme.get().getId() +  ".png";
        String pathStore = "app" + File.separator + "src" + File.separator + "main" + File.separator + 
        "resources" + File.separator + "static" + File.separator + "assets" + File.separator + "img" + File.separator + "themes" + File.separator + imageName;		
		
		File uploadedFile = new File(FILES_FOLDER.toFile(), pathStore);
		file.transferTo(uploadedFile);
		
		theme.get().setImagePath("/assets/img/themes/"+imageName);
		themeService.save(theme.get());
	}
	
	public void dowloadImage(HttpServletResponse res, Path image) throws IOException {
		FileInputStream fis = new FileInputStream(image.toString());
		res.setContentType("image/png");
		res.setContentLength((int) image.toFile().length());
		IOUtils.copy(fis, res.getOutputStream());
		
		fis.close();
		res.getOutputStream().close();
	}
	
	public Path getImage(String path) {
		return FILES_FOLDER.resolve(path);
	}
}