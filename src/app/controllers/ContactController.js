class ContactController {
  index(request, response) {
    //lista todos os registros
    response.send('Sendo from Contact Controller');
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
