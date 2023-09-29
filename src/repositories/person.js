const Person = require('../models/person.js');

class PersonRepository {
  async GetAll() {
    return await Person.findAll();
  }

  async GetById(id) {
    return await Person.findOne({
      where: { id },
    });
  }

  async Add(person) {
    await Person.create(person);
  }

  async Update(id, person) {
    await Person.update(person, {
      where: { id },
    });
  }

  async Delete(id) {
    await Person.destroy({
      where: { id },
    });
  }
}

module.exports = PersonRepository;
