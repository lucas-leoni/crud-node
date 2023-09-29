const PersonService = require('../services/person');
const service = new PersonService();

class PersonController {
  async GetAll(req, res) {
    try {
      const people = await service.GetAll();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const person = await service.GetById(id);
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const person = req.body;
      await service.Add(person);
      res.status(201).json({
        message: 'Person added successfully!',
        person: person,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id;
      let person = await service.GetById(id);
      person = req.body;
      service.Update(id, person);
      res.status(200).json({
        message: 'Person updated successfully!',
        person: person,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id;
      await service.Delete(id);
      res.status(200).json({ message: 'Person deleted successfully!' });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = PersonController;
