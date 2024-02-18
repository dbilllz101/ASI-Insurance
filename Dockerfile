FROM adoptopenjdk11 : latest
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnv dependency:resolve
COPY src ./src
CMD ["./mvnw", "spring-boot:run"]
