<h1 align="center">
 <img alt"Doe logo" src="public/logo.png"/>
</h1>

<h1 align="center">MaratonaDev 3.0</h1>
<p align="center">Projeto <strong>DOE</strong> desenvolvido durante a MaratonaDev 3.0 da <a href="https://rocketseat.com.br">Rocketseat</a> 🚀👩🏽‍🚀</p>
<p align="center">
<a href="https://rocketseat.com.br">

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ferramentas-utilizadas">Ferramentas utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades-da-aplicação">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iniciando-a-aplicação">Iniciando a aplicação</a>
</p>

## Sobre o projeto

Este projeto é uma aplicação completa (Back-end e Front-end), que consiste em criar um sistema para armazenar dados de doadores de sangue.


## Ferramentas utilizadas

Algumas das ferramentas utilizadas para o desenvolvimento deste projeto são:
- Express;
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize; 
- Nunjucks;
- Yup;
- PostgreSQL;
- HTML;
- CSS;

## Funcionalidades da aplicação

***1. Cadastro de doadores*** - Esta funcionalidade é responsável por cadastrar novos doadores de sangue e manter estes dados armazenados em uma base de dados.

***2. Exibição de doadores*** - Esta funcionalidade é responsável por exibir os últimos doadores cadastrados, apresentando informações básicas como nome e tipo sanguíneo.

## Iniciando a aplicação


**1.** Para utilizar esta applicação, primeiramente clone este repositório para seu computador
```
git clone git@github.com:caioproft/DOE-doacao-de-sangue.git
```
**2.** Acesse a pasta do projeto
```
cd DOE-doacao-de-sangue
```

**3.** Instale as depêndencias da aplicação.

```
yarn
```

**4.** Configure as variáveis de ambiente para a conexão com o banco de dados de sua máquina criando um arquivo na raiz do projeto chamado **.env** e siga o exemplo do arquivo **.env.example** para definir as variáveis.

**5.** Rode a aplicação

```
yarn dev
```

**6.** Acesse o localhost na porta 3333 para visualizar a aplicação

```
http://localhost:3333
```
