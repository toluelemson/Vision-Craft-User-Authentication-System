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

Add these keys as environment variable

`TOKEN_SECRET_KEY`: Use to sign jwt tokens

`DB_HOST`: Database host

`DB_USER`: Database User

`DB_PASSWORD`: Database Password

`DB_NAME`: Database name

`PORT`: Api server port(default = 8080)

## Getting started:

##### Migration
    yarn generate:migration
    yarn migration:run
    yarn create:migration


##### Seed sample data into db
	yarn schema:drop
	yarn schema:sync
	yarn seed:run

##### Run only server to test backend api
	yarn dev
###### Run only server with test
	yarn test:dev
	yarn run:fullstack

#### Test
##### Unit & Integration tests in server
    yarn test

##### Unit & Integration tests in server
    cd client
	yarn test

### Trello board

* [Trello board for this project](https://trello.com/b/jz3jbpDR)

