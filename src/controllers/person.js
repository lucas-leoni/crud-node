const PersonService = require('../services/person');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

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
      await service.Update(id, person);
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
      res.status(200).json({
        message: 'Person deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const { dataValues: person } = await service.GetByEmail(email);

      if (!person) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      if (!(await bcrypt.compare(password, person.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign(
        {
          id: person.id,
          email: person.email,
          name: person.name,
        },
        config.secret
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = PersonController;
