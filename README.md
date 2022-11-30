# Project TFC

<div align="center">
<img src=https://i.imgur.com/Ki1zXlI.png" width="200px">
</div>

## About
Full stack soccer matches and leaderboards web application developed in React and Node during my time studying at [Trybe](https://www.betrybe.com/).

![Login](https://github.com/marllomartin/trybe-futebol-clube/blob/main/app/frontend/public/LOGIN.gif)

In order to log in, you need two use one of the following credentials:


<details>
<summary>User</summary>
email: user@user.com
password: secret_user
</details>

<details>
<summary>Admin</summary>
email: admin@admin.com
password: secret_admin
</details>

## Features

  * Log in;
  
    * The user is authenticated when logging in;

  * Visualize a table with all the soccer matches and their scoreboards;
  
  * If the user has the admin role, they can add new matches, update each team scoreboard and finish ongoing matches;
  
  * Visualize the general leaderboard, the visitor teams leaderboard and the home teams leaderboard;
    
    * The leaderboard is automatically updated as new matches are added by the admin;

![Leaderboard](https://github.com/marllomartin/trybe-futebol-clube/blob/main/app/frontend/public/TABLE.gif)

## Learnings

  * Planning a CRUD using Node.js and TypeScript;
  
  * Use of OOP(Object Oriented Programming) paradigm;
  
  * TDD(Test Driven Development);

  * JWT Authentication;
  
  * Setting Dockerfiles;
  
  * Container orchestration with Docker Compose;


## Technologies Used
* [Docker](https://www.docker.com/)

### Back-End
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Mocha](https://mochajs.org/)
* [JWT](https://jwt.io/introduction)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)

### Front-End
* [React](https://reactjs.org/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)

## Running project with Docker (recommended)

### Cloning project:
```
git clone git@github.com:marllomartin/trybe-futebol-clube.git

cd trybe-futebol-clube

cd app
```
### Building Docker
```
docker-compose up --build
```

## Running project locally

### Cloning project:
```
git clone git@github.com:marllomartin/trybe-futebol-clube

cd trybe-futebol-clube
```


### Running Back-End:
#### Attention!
The Back-End of this project has environment variables. Rename the `.env.example` file to `.env` and set its values accordingly to your own settings. 

#### Changing to Back-End directory:
```
cd app

cd backend
```
#### Installing dependencies:
```
npm install
```
#### Creating database with Sequelize:
```
npx sequelize db:create
```
#### Running Sequelize migrations:
```
npx sequelize db:migrate
```
#### Seeding database with Sequelize:
```
npx sequelize db:seed:all
```
#### Running Back-End:
```
npm run dev
```

### Running Front-End:
#### Changing to Front-End directory:
```
cd ..

cd frontend
```
#### Installing dependencies:
```
npm install
```
#### Running Front-End:
```
npm start
```
