const ExerciceService = require('../services/person');
const service = new ExerciceService();

class ExerciceController {
  async GetAll(req, res) {
    try {
      const names = await service.GetAll();
      res.status(201).json({ names: names });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const name = await service.GetById(id);
      res.status(200).json({ name: name });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const person = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }
      await service.Add(person);
      res.status(201).json({ message: 'Nome adicionado com sucesso!' });
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
      person = req.body.person;
      service.Update(id, person);
      res.status(201).json({ message: 'Nome atualizado com sucesso!' });
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
      res.status(201).json({ message: 'Nome excluído com sucesso!' });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = ExerciceController;
