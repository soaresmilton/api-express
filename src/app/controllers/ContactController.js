const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    //lista todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);

  }

  async show(request, response) {
    //obter um registro
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) return response.status(404).json({ error: 'Contact not found' });


    response.json(contact);
  }

  store() {
    //Criar novo registro
  }

  update() {
    //Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);
    if (!contact) return response.status(404).json({ error: 'Contact not found' });

    await ContactRepository.delete(id);
    response.sendStatus(204); // 204: No content
  }
}

//Design Pattern: Singleton => Podemos ter apenas uma única instância desse objeto no app
module.exports = new ContactController();
