const ExerciceRepository = require('../repositories/person.js');
const repository = new ExerciceRepository();

class ExerciceService {
  errorMessagePerson = 'Informe todos os dados!';
  errorMessageIndex = 'Índice inválido!';

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id) {
    return repository.GetById(id);
  }

  async Add(person) {
    if (!person) {
      throw new Error(this.errorMessagePerson);
    }
    repository.Add(person);
  }

  async Update(id, person) {
    if (!person) {
      throw new Error(this.errorMessagePerson);
    } else if (!id || isNaN(id)) {
      throw new Error(this.errorMessageIndex);
    }
    repository.Update(id, person);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.errorMessageIndex);
    }
    repository.Delete(id);
  }
}

module.exports = ExerciceService;
