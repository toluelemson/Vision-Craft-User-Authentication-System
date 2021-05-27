# Vision-Craft User Authentication System (UAS)

## About this Project
This open-source project allows to login and registers users. User can see a message (“Yay, you’re logged in!”)

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

`MYSQL_HOST`: Database host
`MYSQL_PORT`= Api server port(default = 8080)
`MYSQL_USER`= Database User
`MYSQL_PASSWORD`= Database Password
`MYSQL_DATABASE`= Database name
`PORT`: Api server port(default = 8080)
`SKIP_PREFLIGHT_CHECK`= true

## Getting started:
In your local MySQL database instance, create a database called `uas`

###### Install dependencies:
	yarn

###### Then spin up the entire app (backend tests, migration, data seeds, backend, client)
	`yarn test:dev`
	
##### Migration
    yarn generate:migration
    yarn migration:run
    yarn create:migration

#### Test
##### Backend Unit & Integration tests
    yarn test

### Trello board

* [Trello board for this project](https://trello.com/b/jz3jbpDR)

