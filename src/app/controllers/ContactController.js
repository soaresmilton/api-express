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
