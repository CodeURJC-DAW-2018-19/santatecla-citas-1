cd ../angular2

# Build angular app
#docker run --rm --name angular-cli -v ${PWD}:/angular -w /angular teracy/angular-cli /bin/bash -c "npm install; npm rebuild; ng build --prod --baseHref=https://localhost:8080/new/"
npm install
npm run ng build --prod --baseHref=https://localhost:8080/new/

cd ../docker

.\create_image.bat

docker-compose up