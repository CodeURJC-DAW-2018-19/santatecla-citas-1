cd ../app
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn package
copy target\app-0.0.1-SNAPSHOT.jar ..\docker\build\
cd ..
copy themes-images docker\build\themes-images\
cd docker
docker build -t sigma98/app .