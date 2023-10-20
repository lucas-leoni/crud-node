const Person = require('../models/person.js');
const bcrypt = require('bcrypt');

class PersonRepository {
  async GetAll() {
    return await Person.findAll();
  }

  async GetById(id) {
    return await Person.findOne({
      where: { id },
    });
  }

  async Add(person, transaction) {
    const passwordHash = await bcrypt.hash(person.password, 10);
    person.password = passwordHash;
    const result = await Person.create(person, { transaction });

    return result;
  }

  async Update(id, person, transaction) {
    const passwordHash = await bcrypt.hash(person.password, 10);
    person.password = passwordHash;
    const result = await Person.update(person, {
      transaction,
      where: { id },
    });

    return result;
  }

  async Delete(id) {
    await Person.destroy({
      where: { id },
    });
  }

  async GetByEmail(email) {
    return Person.findOne({
      where: { email },
    });
  }
}

module.exports = PersonRepository;
