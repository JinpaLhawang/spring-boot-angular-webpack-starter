# spring-boot-angular-webpack-starter

## Setup

```
git clone https://github.com/JinpaLhawang/spring-boot-angular-webpack-starter.git
cd spring-boot-angular-webpack-starter
```

## Testing and Building

```
mvn test
mvn package
```

## Running

```
mvn spring-boot:run
```

http://localhost:8080

## DEVELOPMENT MODE: Running with Frontend Code Watcher

With the java application running in another terminal:

```
cd src/main/resources/static/
npm run watch
```

http://localhost:9090

Angular code changes will update and browser will automatically refresh. HTML code changes will update, but will require manual refresh.
