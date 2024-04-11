# Code challenge repo

This is the repository for the code challenge interview, you should make sure you can execute and run the application before the interview.

You will need to have nvm with node 18.19.1 and yarn installed before running the application.

In this repo there are 2 folder `client` and `server`, each contain a simple application.

## server application

The server application is built under node 18.19.1 with express and typescript, for simplicity of the code challenge, it is using internal memory as storage without connecting to any actual database.

### How to start the application

From the root folder execute the following commands:

1. `cd server` to go into the server folder
2. `nvm use` to make sure you are using node 18.19.1
3. `yarn` to install dependencies
4. `yarn start` to start the application

## client application

The server application is bootstraped with create-react-app typescript template and use axios to fetch information from the backend.

### How to start the application

From the root folder execute the following commands:

1. `cd client` to go into the server client
2. `nvm use` to make sure you are using node 18.19.1
3. `yarn` to install dependencies
4. `yarn start` to start the application
