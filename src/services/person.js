const PersonRepository = require('../repositories/person.js');
const repository = new PersonRepository();

class PersonService {
  errorMessagePerson = 'Provide all data!';
  indexErrorMessage = 'Invalid index!';

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
      throw new Error(this.indexErrorMessage);
    }
    repository.Update(id, person);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Delete(id);
  }

  async GetByEmail(email) {
    return repository.GetByEmail(email);
  }
}

module.exports = PersonService;
