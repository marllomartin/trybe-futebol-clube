# Project TFC

<div align="center">
<img src=https://i.imgur.com/Ki1zXlI.png" width="200px">
</div>

## Sobre
Aplicação full stack de um site informativo sobre partidas e classificações de futebol desenvolvido enquanto eu estudava na [Trybe](https://www.betrybe.com/).

![Login](https://github.com/marllomartin/trybe-futebol-clube/blob/main/app/frontend/public/LOGIN.gif)

## Funcionalidades
Neste projeto, o usuário é capaz de:

  * Fazer o login na aplicação;
  
    * É feita a autenticação local do usuário ao logar na aplicação

  * Visualizar uma tabela com todas partidas;

  * Caso o usuário seja um administrador, adicionar novas partidas e atualizar e finalizar partidas em andamento;
  
  * Visualizar placar geral, placar de visitantes e placar de mandantes;

    * O placar será atualizado automaticamente conforme novas partidas são adicionadas pelo administrador;

![Leaderboard](https://github.com/marllomartin/trybe-futebol-clube/blob/main/app/frontend/public/TABLE.gif)

## Aprendizados

  * Planejamento de um CRUD com Node.js e TypeScript;
  
  * Utilização do paradigma de Programação Orientada a Objetos ;
  
  * Desenvolvimento TDD (Test Driven Development);

  * Processos de autenticação de JWT;
  
  * Organização de Dockerfiles;
  
  * Orquestração de containers com o Docker Compose;


## Tecnologias Utilizadas
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

## Rodando o projeto com o Docker (recomendado)

### Clonando o projeto:
```
git clone git@github.com:marllomartin/trybe-futebol-clube.git

cd trybe-futebol-clube

cd app
```
### Inicializando o Docker
```
docker-compose up --build
```

## Rodando o projeto localmente

### Atenção!
Esse projeto utiliza variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e altere os valores de acordo com suas próprias configurações.

### Clonando o projeto:
```
git clone git@github.com:marllomartin/trybe-futebol-clube.git

cd trybe-futebol-clube

cd app
```
### Instalando as dependências do Front-End:
```
cd frontend

npm install
```
### Instalando as dependências do Back-End:
```
cd ..

cd backend

npm install
```
### Inicializando o Banco de Dados com Sequelize:
```
npx sequelize db:create
```
### Executando as Migrations do Banco de Dados com Sequelize:
```
npx sequelize db:migrate
```
### Populando o Banco de Dados com Sequelize:
```
npx sequelize db:seed:all
```
### Inicializando o Back-End do projeto:
Dentro da pasta backend:
```
npm run dev
```
### Inicializando o Front-End do projeto:
Dentro da pasta frontend:
```
npm start
```
