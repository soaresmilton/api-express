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

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email)
    ));
  }


  delete(id) {
    return new Promise((resolve) => {
      contacts  = contacts.filter((contact) => contact.id !== id)
      resolve();
    })
  }

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

}

module.exports = new ContactRepository();
