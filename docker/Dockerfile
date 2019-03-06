FROM openjdk:8-jdk-alpine

COPY target/app-0.0.1-SNAPSHOT.jar /

EXPOSE 8443

# run the application
CMD ["java", "-jar", "app-0.0.1-SNAPSHOT.jar"]