package com.image;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
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
		
		String imageName = theme.get().getId() +  ".png";
		String pathStore = "themes-images" + File.separator + imageName;
		
		File uploadedFile = new File(FILES_FOLDER.toFile(), pathStore);
		file.transferTo(uploadedFile);
		
		themeService.save(theme.get());
	}
	
	public void downloadImage(HttpServletResponse res, Path image) throws IOException {
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

	public Path handleFileDownload(long id) {

		String fileName = id + ".png";

		Path imagesPath = FILES_FOLDER.resolve("themes-images");
		Path image = imagesPath.resolve(fileName);

		if (!Files.exists(image)) {
			image = imagesPath.resolve("0.png");
		}

		return image;
	}

}