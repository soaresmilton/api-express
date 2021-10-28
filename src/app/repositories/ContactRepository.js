const { v4 } = require('uuid');
let contacts = [
  {
    id: v4(),
    name: 'Milton',
    email: 'milton@gmail.com',
    phone: '3555555555',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Sara',
    email: 'sara@gmail.com',
    phone: '3555555555',
    category_id: v4(),
  },

  {
    id: v4(),
    name: 'Contact3',
    email: 'contact3@gmail.com',
    phone: '3555555555',
    category_id: v4(),
  },
]

class ContactRepository {
  // Listar todos os registros do repositório
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts  = contacts.filter((contact) => contact.id !== id)
      resolve();
    })
  }
}

module.exports = new ContactRepository();
