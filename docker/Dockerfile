FROM openjdk:8-jdk-alpine

COPY build/app-0.0.1-SNAPSHOT.jar /
COPY build/themes-images /themes-images

EXPOSE 8080

CMD ["java", "-jar", "app-0.0.1-SNAPSHOT.jar"]