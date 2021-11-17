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

13. [Próximos passos](#aula-13)

14. [O que é o Docker?](#aula-14)

15. [Instalando o Docker](#aula-15)

16. [Comandos Básicos do Docker](#aula-16)

17. [Preparando o Banco de Dados](#aula-17)

18. [Criando a tabela de Contatos](#aula-18)

19. [Conectando o Node ao Postgres](#aula-19)

20. [Refatorando o método create](#aula-20)

21. [Refatorando os métodos de find](#aula-21)

22. [Ordenando os resultados do SELECT](#aula-22)

23. [Refatorando o método update](#aula-23)

24. [Refatorando o método delete](#aula-24)

25. [Criando o módulo de Categorias](#aula-25)

26. [Trabalhando com JOINS](#aula-26)

27. [Capturando e tratando erros](#aula-27)

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

## Próximos passos

Agora que nossas rotas da API estão construídas e funcionando, podemos dar um passo além na construção de nossa aplicação.

Portanto, podemos refatorar nossos repositories, desfazendo dos dados em memória que construímos através de um mock.

Nas próximas aulas iremos entender o conceito de DOCKER e conectar nossa aplicação em um banco de dados PostgreSQL.

---

# Aula 14

## O que é docker?

Docker é uma *[container engine](https://www.docker.com/resources/what-container)* muito utilizada para trabalhar com a ideia de virtualização de imagens dentro de um host, poupando recursos e disponibilizando soluções para atuação de vários serviços integrados, sem se preocupar com atualizações de libs ou binários específicos.

O Docker, portanto, viabiliza o uso de VMs dentro de um host (AWS por exemplo) para rodar diferentes partes de nossa aplicação (uma VM para o Node na versão X outra VM para o node na versão Y e outra VM para o postgreSQL na versão Z) utilizando o kernel do Host, porém, cada qual em sua própria VM com suas libs e bins.

![Imagem explicativa do funcionamento do docker](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d46ee47-8b70-41c8-80d7-ecb620e59570/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211104T180132Z&X-Amz-Expires=86400&X-Amz-Signature=f5c83da13efad1db91236bf8bf9e447ae1872256223f803d6a89801a42b9bf22&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

### Por que usar Containers?

- As aplicações rodam de forma isolada (não interferem uma na outra);
- Usa o mesmo Kernel da máquina base, tornando-se mais leve e eficiente quando comparado às VM's tradicionais;
- Portabilidade → através dos containers conseguimos compartilhar o ambiente onde nossa aplicação roda, com as exatas características que a aplicação necessita para funcionar da maneira correta naquele momento.


---

# Aula 15
## Instalando o Docker

Para a instalação, basta seguir o passo a passo na documentação no próprio site do [Docker](https://www.docker.com/).

---

# Aula 16

## Comandos básicos do Docker

Essa aula aborda os comandos básicos e mais usados do Docker.

Via de regra, a primeira coisa a se fazer é baixar a imagem que iremos utilizar, para depois criar o contêiner:

- `sudo docker pull postgres` ⇒ baixa a imagem do postgres
- `sudo docker image ls` ⇒ lista todas as imagens baixadas
- `sudo docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres` ⇒ Cria o container com base na imagem baixada. As flags: - -name: define um nome para o container, -e: define as variáveis de ambiente que a gente quiser ter, nesse caso temos as que definem o usuário e senha do DB, -p: define a porta de uso, no caso do postgres a sua porta padrão é a 5432, portanto iremos utilizá-la, por fim, a flag -d: nome da imagem que iremos rodar dentro do container, portanto é através dessa tag que definimos a imagem → container. == Após rodar esse comando, será gerado uma hash (nesse caso: 5d7c2a46d169c679235ca6edc9a47bfae7a93a8865ef7639a145f9b755ed67be), que indica que o container foi criado
- `sudo docker container ls` ou `sudo docker ps`⇒ lista os containers
- `sudo docker stop <CONTAINE_NAME>` ou `sudo docker stop <CONTAINER_ID>` ⇒ para de executar o container, porém não exclui esse container
- `sudo docker ps -a` ou `sudo docker container ls -a` ⇒ lista todos os containers criados, incluindo os containers que não estão ativos
- `sudo docker start <CONTAINER_NAME>` ou `sudo docker start <CONTAINER_ID>` ⇒ inicia o repositório que estava inativo ou 'stopado'
- `sudo docker rm -f <CONTAINER_ID>` ou `sudo docker container rm <CONTAINER_NAME>` ⇒ remove/exclui o container docker. Antes de excluir um container, é necessário stopar ele, executando o comando do passo 2.
- `sudo docker rmi <IMAGE_NAME>` ou `sudo docker rmi <IMAGE_ID>` ⇒ Exclui a **IMAGEM.** Porém, antes de deletar uma imagem, temos que parar o(s) container(s) que está rodando com essa imagem, apagar o container e assim apagar a imagem.
---

# Aula 17

## Preparando o Banco de Dados

- Em src ⇒ criar folder database
- Em database ⇒ criar file schema.sql
- Verificar se o container do banco de dados está funcionando:  `sudo docker ps` se não estiver, ativar com o `sudo docker start <CONTAINER_NAME>`
- Executar o container: `sudo docker exec -it <CONTAINER_NAME> bash`
- Após entrar no terminal do container, executando o container, vamos logar no postgres com o seguinte código: `psql -U <POSTGRES_USER>` nesse caso POSTGRES_USER == root

### Alguns comandos básicos do POSTGRES

- `\l`  ⇒ lista a base de dados criada
- `CREATE DATABASE <nome_do_banco>;` ⇒ Query para criar tabela em banco de dados SQL;
- `\c <nome_do_banco>` ⇒ conecta ao banco de dados criado
- `CREATE TABLE <nome_da_tabela> ();`  ⇒ Cria tabelas no SQL
- `\dt` ⇒ lista todas as tabelas criadas dentro do banco
- `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";` ⇒ Cria uma extensão que acessa a função para gerar UUIDs no postgres. Observar que: essa extensão só será criada se elá não existir no banco

---

# Aula 18
## Criando tabela de Contatos

- Criar tabela de contatos em schema.sql

```sql
CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
```
---

# Aula 19

## Conectando o Node ao Postgres

- Instalar pacote: `yarn add pg` ou `npm install pg` ⇒ Pg é um pacote que faz a ponte entre o node e o postgres
- Dentro da pasta **database** criar um arquivo *index.js*. Esse arquivo, será responsável por chamar o pacote pg e gerenciar as permissões e informações pertinentes para o controle e acesso ao banco de dados

*index.js*

```jsx
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
}
```

**EXPLICANDO:**

A `const client` define qual nosso banco de dados, acessando as configurações de criação do banco, com a porta, o usuário, a senha e o nome do banco.

Ao final do arquivo, após a realização da conexão, é exportado um método para que possamos lidar com as queries SQL no nosso arquivo *repositories.js*

Notar que, a variável *rows* é uma propriedade que existe dentro do objeto client.query. Essa propriedade é o que nos permite trabalhar com os dados das tabelas existentes nos bancos de dados

---

# Aula 20

## Refatorando o método create

- Importar o arquivo index da pasta database:

```jsx
const db = require('../../database');
```

- O método create refatorado fica:

```jsx
async create({ name, email, phone, category_id }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }
```

---

# Aula 21

## Refatorando os métodos de find

- **REFATORANDO O FINDALL:**

**obs: Sempre que transformamos uma função ou uma método de uma classe em *async* a mesma passa a retornar uma *Promise*.**

```jsx
async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }
```

- **REFATORANDO O FIND BY ID:**

```jsx
async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }
```

- **REFATORANDO O FIND BY EMAIL:**

```jsx
async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }
```
---

# Aula 22

## Ordenando os resultados do SELECT

Nessa aula vamos aprender a ordenar os resultados do SELECT. No caso, iremos ordenar a lista de contatos em ordem alfabética pelo nome. Dessa vez, para fazermos a ordenação das informações, iremos utilizar os recursos do próprio banco de dados:

Ajustando o método **findAll:**

```jsx
async findAll() {
    const rows = await db.query('SELECT * FROM contacts ORDER BY name ASC');
    return rows;
  }
```

Basicamente, dessa forma sempre iremos listar os contatos em ordem alfabética pelo nome.

Para deixarmos essa ordenação dinâmica, em que o usuário pode ajustar a ordem em que os contatos aparecem por uma *query param*, podemos fazer os seguintes reajustes:

Em ContactController.js, ajustando o método *index:*
Abaixo estamos pegando o QUERY PARAM *orderBy:*

```jsx
async index(request, response) {
    //lista todos os registros
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy);
    response.json(contacts);
  }
```

Agora, ajustando novamente o método *findAll* em ContactRepository.js:

```jsx
async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }
```

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
