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


##### Seed data
	yarn schema:drop
	yarn schema:sync
	yarn seed:run

##### Deployment
    yarn build-ts

##### Run
	yarn dev
###### Run with tests and seeder tests
	yarn test:dev

#### Test
##### Unit & Integration tests
    yarn test