cd ../angular2

# Build angular app
docker run --rm --name angular-cli -v ${PWD}:/angular -w /angular teracy/angular-cli /bin/bash -c "npm install; ng build --prod --baseHref=https://localhost:8080/new/"

cd ../docker

.\create_image.bat

docker-compose up