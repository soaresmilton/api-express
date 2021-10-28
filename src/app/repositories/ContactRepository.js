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
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
