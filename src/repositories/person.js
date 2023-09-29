const names = new Array('Lucas', 'Alexandre', 'Joni');
const Pessoa = require('../models/person.js');

class ExerciceRepository {
  async GetAll() {
    return await Pessoa.findAll();
  }

  async GetById(id) {
    return await Pessoa.findOne({
      where: { id },
    });
  }

  async Add(person) {
    await Pessoa.create(person);
  }

  async Update(id, person) {
    await Pessoa.update(person, {
      where: { id },
    });
  }

  async Delete(id) {
    names.splice(id, 1);
  }
}

module.exports = ExerciceRepository;
