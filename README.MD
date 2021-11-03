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

11. [Criando a rota de cadastro de Contatos](#aula-11)

12. [Criando a rota de edição dos Contatos](#aula-12)

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

O Eslint é uma ferramenta desenvolvida para padronizar a forma que escrevemos o código, para manter ele limpo, organizado e padronizado ao longo do tempo. Esse tipo de ferramenta, garante que iremos ter consistência na digitação do nosso código, de forma a garantir, por exemplo, que sempre colocaremos ;, ou utilizaremos aspas simples para manusear strings.

**Iniciando a configuração:**

1. Instalar a extensão ESLint no VSCODE
2. Instalar o pacote do ESLint no projeto:
    1. `yarn add eslint -D`
3. Acionar o comando de inicialização da ferramenta: `yarn eslint --init`. Após executar o comando, algumas perguntas apareceram para a configuração. Para esse projeto, responderemos:
    1. pergunta 1: Opção 3
    2. Pergunta 2: Opção 2
    3. Pergunta 3: Opção 3
    4. Pergunta 4: No
    5. Pergunta 5: Node → Primeiro apertar a tecla espaço para desmarcar a opção "browser" e selecionar a opção Node para continuar.
    6. Pergunta 6: Opção 1
    7. Pergunta 7: Opção 1 - Style Guide do Airbnb
    8. Pergunta 8: Opção 1
    9. Pergunta 9: yes

    Após a configuração, rodar o comando yarn no terminal para o Yarn reconhecer o eslint também.


### Editorconfig

A segunda ferramenta de configurações que iremos utilziar é o EditorConfig for VS Code. Da mesma forma, devemos instalar essa extensão no nosso editor de texto.

**Usando o editorconfig**

1. Na parte *explorer,* onde mostra a estrutura de arquivos do nosso editor de texto, clicar com o botão direito do mouse e selecionar a opção: ***Generate .editorconfig***
2. Isso vai criar um documento *.editorconfig* com algumas configurações pré determinadas

    ```jsx
    # EditorConfig is awesome: https://EditorConfig.org

    # top-most EditorConfig file
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true //vem false como padrão
    insert_final_newline = true // vem false como padrão
    ```

---

# Aula 6

## Criando Controller de Contatos

**Definição de controller**

Um *controller* atua como um centralizador de funcionalidades ou regras de negócio de uma determinada entidade de nossa aplicação.

Como a API a ser construída será relacionados a gerenciamento de contatos, portanto iremos criar um controller específico para os contatos.

**Iniciando nossa estrutura:**

- Em src, criar uma pasta app, em app criar a pasta controllers.
    - A pasta controllers será nosso local de criação dos controllers para cada entidade que nossa aplicação necessitar;
    - Resumindo: `cd src && mkdir app && cd app && mkdir controllers && cd controllers && touch ContactController.js`

    Estrutura de pastas nesse ponto da aplicação:

    ![Arquitetura de pastas do nosso projeto até o momento](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a636e647-87c9-402a-a01d-039740a3cf8e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211028T010122Z&X-Amz-Expires=86400&X-Amz-Signature=c6847af7944c723aba3ba1188bb9187182eef8b5b8a9980c55049120a58fa1e2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


    Arquitetura do nosso projeto até o momento. Destacando o controller criado

- Nos controllers, vamos implementálo utilizando classes e iremos utilizar um Design Pattern chamado de Singleton. Esse pattern diz que podemos ter apenas uma única instancia do objeto em nosso app.
- Para os métodos da nossa classe referente ao Controller, iremos abordar seus métodos usando uma convenção padrão, em que os métodos:
    - index() ⇒ Usado para listar todos os registros do Controller;
    - show() ⇒ Usado para obter somente um registro;
    - store() ⇒ Cria novo registro
    - update() ⇒ Edita um registro
    - delete() ⇒ Deleta um registro
- Continuando ⇒ Mover nossas rotas criadas no arquivo *index.js*  para um novo arquivo chamado *routes.js* criado dentro da pasta src.

    Nosso arquivo routes.js deverá ficar dessa maneira:

    ```jsx
    const { Router } = require('express');
    const router = Router();
    const ContactController = require('./app/controllers/ContactController');

    router.get('/contacts', ContactController.index);

    module.exports = router;
    ```

    O arquivo index.js:

    ```jsx
    const express = require("express");
    const routes = require('./routes');
    const app = express();

    const PORT = 3000;

    app.use(routes);

    app.listen(PORT, () => {
      console.log(`SERVER IS RUNING AT ===> http://localhost:${PORT}`);
    });
    ```

    O arquivo ContactController.js

    ```jsx
    class ContactController {
      index(request, response) {
        //lista todos os registros
        response.send('Sendo from Contact Controller')
      }

      show() {
        //obter um registro
      }

      store() {
        //Criar novo registro
      }

      update() {
        //Editar um registro
      }

      delete() {
        // Deletar um registro
      }
    }

    //Design Pattern: Singleton => Podemos ter apenas uma única instância desse objeto no app
    module.exports = new ContactController();
    ```

---

# Aula 7

## Entendendo o Repository Pattern

**Definição:**
Repository Pattern é uma layer (camada) de abstração de acesso ao Data Source (fonte de dados, que pode ser: SQL, NoSQL, .json, API).

**Vantagens de usar o Repository Pattern:**

O repository pattern tira a obrigação de implementar dados sensíveis, como a regra de negócio principal da aplicação, dentro de um controller. Consequentemente, deixa o código mais fácil de se manter a longo prazo, bem como seguro contra erros de lógica e implementação.

Exemplo: caso em algum momento do desenvolvimento da aplicação, necessite trocar o banco de dados SQL para um NoSQL, podemos refatorar somente o repository, sem fazer alterações sensíveis no controller

Dessa forma, a arquitetura básica desse pattern fica:

`Controller ↔ Repository ↔ Data Source`

Sendo assim, o Controller não tem interesse em como o repository irá criar seus métodos para criação de entidades dentro da aplicação.

---

# Aula 8

## Criando Repository de Contatos

**Iniciando:**

- Criar pasta *repositories* dentro da pasta app.
- Criar arquivo repository da entidade em questão. Nesse caso, criar o arquivo *ContactRepository.*
- Nessa aplicação, também iremos usar o pattern Singleton para exportar o ContactRepository como uma classe instanciada.
- Na classe instanciada, iremos criar todos os métodos que o repository necessita para manipular o data source.
- Iremos iniciar a aplicação com um Data Source mocado, para que futuramente, possamos entender o sentido de usar o Repository Pattern na prática, refatorando o repository e migrando o Data Source para o PostgreSQL
- Instalar a lib *uuidv4* para gerar hashs para nosso ID ser uma string alfanumérica → melhora a segurança de nossos dados; `yarn add uuid`
- Cria o mock no proprio arquivo do repository, sendo que o mock é um array de objetos.
- Agora, implementamos uma lógica bem simples para retornar a lista de contatos: criar metodo findAll em nossa classe **ContactRepository** que simplesmenre retorna os contatos. Após isso, importar o repository no controller e chamar o método ContactRepository.findAll() no método index();

    Nesse ponto, nossos arquivos *ContactRepository.js* e *ContactRepository.js* ficaram dessa maneira:

    *ContactRepository:*

    ```jsx
    const { uuid } = require('uuidv4');
    const contacts = [
      {
        id: uuid(),
        name: 'Milton',
        email: 'milton@gmail.com',
        phone: '3555555555',
        category_id: uuid(),
      },
    ]

    class ContactRepository {
      // Listar todos os registros do repositório
      findAll() {
        return contacts;
      }
    }

    module.exports = new ContactRepository();
    ```

    *ContactRepository:*

    ```jsx
    const ContactRepository = require('../repositories/ContactRepository');

    class ContactController {
      async index(request, response) {
        //lista todos os registros
        const contacts = await ContactRepository.findAll();
        response.json(contacts);
      }

      show() {
        //obter um registro
      }

      store() {
        //Criar novo registro
      }

      update() {
        //Editar um registro
      }

      delete() {
        // Deletar um registro
      }
    }

    //Design Pattern: Singleton => Podemos ter apenas uma única instância desse objeto no app
    module.exports = new ContactController();
    ```

- Nesse ponto é importante observar que, quando tivermos conectados a um banco de dados, a chamada dos dados do banco para que seja possível listar os contatos na tela, é uma função bloqueante devido ao tempo de resposta do banco de dados. Então, temos que transformar o método findAll em uma promise JS e utilizar o conceito de async / await no método index() do Contact Controller.  Veja na prática:


    ```jsx
    const { v4 } = require('uuidv4');
    const contacts = [
      {
        id: v4(),
        name: 'Milton',
        email: 'milton@gmail.com',
        phone: '3555555555',
        category_id: v4(),
      },
    ]

    class ContactRepository {
      // Listar todos os registros do repositório
      findAll() {
        return new Promise((resolve) => resolve(contacts));
      }
    }

    module.exports = new ContactRepository();
    ```

---

# Aula 9

## Criando as rotas de show e delete

Nessa aula iremos implementar os métodos show e delete. Aprenderemos a como receber parâmetros nas rotas com o express e dar continuidade no desenvolvimento de nossa API.

**Método SHOW:**

- No arquivo routes.js, criar a rota para o show. Nesse ponto, nosso arquivo de rotas vai ficar dessa maneira:

    ```jsx
    const { Router } = require('express');
    const router = Router();
    const ContactController = require('./app/controllers/ContactController');

    router.get('/contacts', ContactController.index);
    router.get('/contacts/:id', ContactController.show);

    module.exports = router;
    ```

- Uma vez criado a rota que recebe o param desejado na URL, podemos implementar os métodos no Controller e no repository. Para o Controller, por convenção, implementaremos o método *show()*. A implementação desse método fica:

    ```jsx
    async show(request, response) {
        //obter um registro
        const { id } = request.params;
        const contact = await ContactRepository.findById(id);

        if (!contact) return response.status(404).json({ error: 'Contact not found' });

        response.json(contact);
      }
    ```

- Agora, devemos impelemntar o método **findById()** dentro do nosso repository. É esse método que de fato encontra o contato pelo seu ID. Aqui, já conseguimos enchergar melhor um pouco mais da ideia por trás o Repository Pattern. Sendo assim, a implementação do método *findById()* fica:

    ```jsx
    findById(id) {
        return new Promise((resolve) => resolve(
          contacts.find((contact) => contact.id === id)
        ));
      }
    ```


**MÉTODO DELETE:**

- Criar rota delete no arquivo de rotas;

    ```jsx
    router.delete('/contacts/:id', ContactController.delete);
    ```

- Implementar o método delete no Controller

    ```jsx
    async delete(request, response) {
        // Deletar um registro
        const { id } = request.params;

        const contact = await ContactRepository.findById(id);
        if (!contact) return response.status(404).json({ error: 'Contact not found' });

        await ContactRepository.delete(id);
        response.sendStatus(204); // 204: No content
      }
    ```

- Implementar o método delete do Repository:

    ```jsx
    delete(id) {
        return new Promise((resolve) => {
          contacts  = contacts.filter((contact) => contact.id !== id)
          resolve();
        })
      }
    ```

---

# Aula 10
## O que são Middlewares?

**Como funciona o life cycle de uma request:**

Toda vez que uma request "chega" a API precisa resolver essa requisição. E pra resolver essa requisição nós chamamos um método de um Controller, que é onde está localizado nossa regra de negócio. Ao fim da resolução de nossa request, nós respondemos alguma coisa, enviando uma response (seja um sucesso ou um erro).

>Request → Repository → Controller → response

**Com os Middlewares**

Os middlewares,  manipulam os objetos *request* e *response*. Fazendo todas as ações necessárias nesses objetos, inclusive inserindo novas propriedades a eles e disponibilizando para todos os controllers  da aplicação. Ou até mesmo executando para coisas específicas para uma determinada rota ou determinado controller.

Outra funcionalidade dos middlewares é poder controlar o life cycle do request. Como assim?

Essencialmente,  os middlewares antecipam uma request, antes dessa request chegar ao Controller. Dessa forma, os middlewares conseguem responder alguma coisa para a request caso seja necessário. Sendo assim, conseguem decidir se a request continuará o caminho de execução "normal", sendo enviada para o Controller resolver a request ou se a requisição será interrompida e alguma resposta será retornada para a própria request.

>Request ↔ Repository → Controller - response

**Caso de uso commum:**

- Autenticação → validação de usuário.

---

# Aula 11
## Criando a rota de cadastro de Contatos

- Primeiro passo criar rota com método POST no arquivo routes.js:

    ```jsx
    router.post('/contacts', ContactController.store);
    ```

- Chamar o método (middleware) json no arquivo index.js:

    ```jsx
    app.use(json());
    ```

- Implementar os métodos que irão fazer o registro das informações. Nesse caso, no Controller, o método usado executar a criação de contatos é o store(). No Repository, os métodos utilizados são chamados de findByEmail() - que verifica se o email já foi cadastrado anteriormente e o create() → que necessariamente é usado para criar o contato.

    **Método store() → no Controller**

    ```jsx
    async store(request, response) {
        //Criar novo registro
        const { name, email, phone, category_id } = request.body;

        if(!name) {
          return response.status(400).json({ error: 'Name is required' });
        }

        const contactExists = await ContactRepository.findByEmail(email);
        if (contactExists) {
          return response.status(400).json({ error: 'This email already been taken' })
        }

        const contact = await ContactRepository.create({
          name, email, phone, category_id
        });

        response.json(contact)
      }
    ```

    **Método findByEmail() - No Repository:**

    ```jsx
    findByEmail(email) {
        return new Promise((resolve) => resolve(
          contacts.find((contact) => contact.email === email)
        ));
      }
    ```

    **Método create() - no repository**

    ```jsx
    create({name, email, phone, category_id}) {
        return new Promise((resolve) => {
          const newContact = {
            id: v4(),
            name,
            email,
            phone,
            category_id: v4()
          }

          contacts.push(newContact)
          resolve(newContact);
        })
      }
    ```
---

# Aula 12

## Criando a rota de edição dos Contatos

Para finalizarmos a primeira parte de nossa API, falta construir nossa rota de edição de contatos.

Para isso, seguimos:

- Criando a rota com método HTTP do tipo PUT. em *routes.js*:

```jsx
router.put('/contacts/:id', ContactController.update);
```

- Implementando o método update no Controller. Em *ContactController.js:*

```jsx
async update(request, response) {
    //Editar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) return response.status(404).json({ error: 'User not found' });

    if (!name) return response.status(400).json({ error: 'Name is required' });

    const contactByEmail = await ContactRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) return response.status(400).json({ error: 'This e-mail is already in use' });

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id
    });

    response.json(contact);
  }
```

- Implementar o método update no Repository: Em *ContactRepository.js:*

```jsx
update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
```

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
