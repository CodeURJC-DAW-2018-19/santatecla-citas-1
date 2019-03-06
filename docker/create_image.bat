cd ../app
docker run -it --rm -v "%cd%":/usr/src/project -w /usr/src/project maven:alpine mvn package
docker build -t app .
cd ../docker