# Node.JS com Express🔥

Esse repositório é um breve resumo, com as principais informações retiradas do módulo 2 do curso [JSTACK](https://jstack.com.br/).

---
## Get in touch
Feito com ❤️ by [**Milton Soares**](https://www.linkedin.com/in/soaresmilton/)

[![Linkedin Badge](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/soaresmilton/)](https://www.linkedin.com/in/soaresmilton/)
[![Youtube Badge](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCMsbUh0LDOMQCTBdBXwkFiQ/)
[![Instagram Badge](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white&link=https://www.instagram.com/soaresmiltinho/)](https://www.instagram.com/soaresmiltinho/)
---

## Objetivo

Com a evolução do módulo, quero utilizar os conceitos aprendidos para desenvolver meu projeto chamado [getBooks](https://github.com/soaresmilton/getbooks)

---

### 📌Índice

1. [Package Managers → yarn and npm](#aula-1)

2. [Criando um servidor http com Express](#aula-2)

3. [Instalando o Nodemon](#aula-3)

4. [npm scripts](#aula-4)

5. [Configurando o Eslint e o editorconfig](#aula-5)

6. [Criando Controller de Contatos](#aula-6)

7. [Entendendo o Repository Pattern](#aula-7)

8. [Criando Repository de Contatos](#aula-8)

9. [Criando as rotas de show e delete](#aula-9)

10. [O que são Middlewares?](#aula-10)

11. [Aula11](#aula-11)

12. [Aula12](#aula-12)

13. [Aula13](#aula-13)

14. [Aula14](#aula-14)

15. [Aula15](#aula-15)

16. [Aula16](#aula-16)

17. [Aula17](#aula-17)

18. [Aula18](#aula-18)

19. [Aula19](#aula-19)

20. [Aula20](#aula-20)

21. [Aula21](#aula-21)

22. [Aula22](#aula-22)

23. [Aula23](#aula-23)

24. [Aula24](#aula-24)

25. [Aula25](#aula-25)

26. [Aula26](#aula-26)

27. [Aula27](#aula-27)

---

# Aula 1

## Package Managers - Npm and Yarn

### Tipos de módulo do Node.JS

- Nativos (ex.: *http, fs, os, URL*);
- Arquivos criados JavaScript;
- Node Package Manager (npm).

Instalando o node, já se instala o npm automaticamente.

O [Yarn](https://yarnpkg.com/) também é um Package Manager. Porém, com algumas funcionalidades melhoradas em relação ao NPM, tais como eficiência na instalação de pacotes e o arquivo *yarn.lock* que garante estabilidade em versões futuras da aplicação. Vale ressaltar que, atualmente, o npm também tem a funcionalidade lock em suas features.

---

# Aula 2

## Criando um servidor http com Express

O objetivo dessa aula é dar início ao desenvolvimento da nossa API, que será a base para a primeira aplicação do curso, o **myContacts**. Para essa API, iremos utilizar alguns pacotes (ex.: express), que nos auxiliará na construção da API.

### Iniciando:

Para iniciar qualquer projeto node: `npm init -y` ou `yarn init`

**Instalando o express:**

`yarn add express`

### Desenvolvimento da aplicação

1. `mkdir src && cd src && touch index.js`
2. Iniciar o servidor express. O nosso arquivo *index.js*:
    
    ```jsx
    const express = require('express');
    const app = express();
    
    const PORT = 3000;
    
    app.get('/', (request, response) => {
      response.send('<h1>Hello World</h1>')
    })
    
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNING AT ===> http://localhost:${PORT}`);
    })
    ```

---

# Aula 3

## Instalando o Nodemon

O Nodemon é um pacote de desenvolvimento, que nos auxilia na produtividade de construções de aplicação com o Node. 

Ele, por sua vez, fica "ouvindo" nosso servidor, fazendo com que não precisemos reiniciar o servidor sempre que quisermos ver uma alteração implementada.

**Instalando o nodemon como dependência de desenvolvimento:**

`yarn add nodemon -D`  ou `npm install nodemon -D`

**Usando o nodemon:**

`npx nodemon src/index.js`

---

# Aula 4
## Npm scripts

Os *npm's scripts* servem, basicamente, para duas coisas:

1. Fazer automações para processos e tarefas repetitivas
2. Atalhos para comandos longos e chatos de escrever

### Entendendo automações com npm scripts:

Para criar um novo npm script:

- No arquivo *package.json* criar um novo nodo chamado "scripts". Dentro desse nodo, especificar a chave, que será o comando acionador do script e o valor dessa chave será o comando node executado.
- No código abaixo, vamos criar um script para iniciar nosso servidor.

```json
{
  "name": "express",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/soaresmilton/api-express.git",
  "author": "Milton Soares <eng.milton.soares@gmail.com>",
  "license": "MIT",

  "scripts": {
    "dev": "nodemon src/index.js"
  },

  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.14"
  }
}

```

- No caso, o script substitui todo o comando: `nodemon src/index.js`, que nós estávamos utilizando para iniciar um servidor, por `yarn dev` ou `npm run dev`.

---

# Aula 5

## Configurando o Eslint e o editorconfig

---

# Aula 6

## Criando Controller de Contatos

---

# Aula 7

## Entendendo o Repository Pattern

---

# Aula 8

## Criando Repository de Contatos

---

# Aula 9

---

# Aula 10

---

# Aula 11

---

# Aula 12

---

# Aula 13

---

# Aula 14

---

# Aula 15

---

# Aula 16

---

# Aula 17

---

# Aula 18

---

# Aula 19

---

# Aula 20

---

# Aula 21

---

# Aula 22

---

# Aula 23

---

# Aula 24

---

# Aula 25

---

# Aula 26

---

# Aula 27

---