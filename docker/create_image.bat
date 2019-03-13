cd ../app

:: Create jar
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn package

:: Copy jar and images
copy target\app-0.0.1-SNAPSHOT.jar ..\docker\build\
cd ..
copy themes-images docker\build\themes-images\
cd docker

:: Delete containers and images
FOR /f "tokens=*" %%i IN ('docker ps -aq') DO docker rm %%i
docker rmi app

:: Build app image
docker build -t app .

docker-compose up