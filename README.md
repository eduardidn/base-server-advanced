## EXAMPLE SERVER INITIALIZATION

-- DEV MODE --

- *Docker*: if you want to run watching changes use ```export APP_ENV=dev && docker-compose up```
- *Normal Execution*: ```yarn dev```

-- PROD MODE --
- *Docker*: to run the server in a production environment you need to run ```export APP_ENV=prod && docker-compose up```
- *Normal Execution*: ```yarn prod```

-- TEST --
- use yarn test

----------------------------------------------------------------

## Server description

- *Typescript* as defult 
- Basic *Docker* implementation
- *eslint* implemented and auto indent on save
- basic mongoose mock for tests
- *supertest* for integration tests
- *Token* creation and validation functions. middleware to validate this tokens
- pre commit and pre push scripts to validate the code and avoid errors in the server

----------------------------------------------------------------

## Server configuration

To being able to create the tokens, youneed to create a private key in the root of your projecty called "token.pem".

Also you need to create a *.env* file with the next information to connect to the db:

- MONGO_USER
- MONGO_PASS
- MONGO_HOST
- MONGO_DB

For secure propuses this two files are excludes in the .gitignore file
