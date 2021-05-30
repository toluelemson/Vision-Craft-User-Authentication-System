# Vision-Craft User Authentication System (UAS)

## About this Project
This App allows to login and registers users. After login, Users can see a message (“Yay, you’re logged in!”)

![Login](https://user-images.githubusercontent.com/78776693/120108373-99bf9e00-c16d-11eb-9aa2-c77af34d4692.JPG)
![Registeration Screen](https://user-images.githubusercontent.com/78776693/120108432-c378c500-c16d-11eb-8acc-bc4ac81aebaf.JPG)
![welcome](https://user-images.githubusercontent.com/78776693/120108438-c96ea600-c16d-11eb-91eb-de6f9a34a9bc.JPG)

## This is a Node.js backend that:
* validates registration data for first name, last name, email and password
* saves user registration to MySQL DB
* allows login based on registered data
* Accepts input and gives output over JSON REST API
* DB migrations is included
* Built with Typescript
* Test coverage: integration and unit tests with Jest


### Built With
This section lists the frameworks that is used to built this project using.
* [Express](https://expressjs.com/)
* [Typeorm](https://typeorm.io/#/)
* [Typescript](https://www.typescriptlang.org/docs/home.html)
* [Express JWT](https://www.npmjs.com/package/express-jwt)

## Enviroment Variables:

Create .env file in root folder and add these keys as environment variable

`MYSQL_HOST`: <Database host>

`MYSQL_PORT`= <Api server port(default = 8080)>

`MYSQL_USER`= <Database User>

`MYSQL_PASSWORD`= <Database Password>

`MYSQL_DATABASE`= <Database name>

`SKIP_PREFLIGHT_CHECK`= true

## Getting started:
In your local MySQL database instance, create a database called `uas`

###### Install dependencies:
	yarn

###### spin up the entire app without tests
	yarn run:app

###### Then spin up the entire app with (backend tests, data seeds, server, client)
	yarn test:dev

## Others:
##### Migration
    yarn generate:migration
    yarn migration:run
    yarn create:migration

#### Test
##### Backend Unit & Integration tests
    yarn test

##### Client Unit & Integration tests
    cd client
	yarn test

### Trello board

* [Trello board for this project](https://trello.com/b/jz3jbpDR)

