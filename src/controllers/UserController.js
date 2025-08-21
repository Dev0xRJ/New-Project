const UserService = require('../services/UserService');
const axios = require('axios');


class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const userService = new UserService();
      const user = await userService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAllUsers(req, res) {
    try {
      const userService = new UserService();
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserController
let users = [
  { id: 1, name: "Raimundo", cep: "01001000" },
  { id: 2, name: "Maria", cep: "30140071" },
  { id: 3, name: "Jo?o", cep: "60115081" }
];

exports.getUserByName = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Informe um nome" });
  }

  const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
  if (!user) {
    return res.status(404).json({ error: "Usu?rio n?o encontrado" });
  }

  res.json(user);
};

exports.getUserByCep = async (req, res) => {
  const { cep } = req.query;
  if (!cep) {
    return res.status(400).json({ error: "Informe um CEP" });
  }

  try {
    const user = users.find(u => u.cep === cep);
    if (!user) {
      return res.status(404).json({ error: "Usu?rio n?o encontrado com esse CEP" });
    }
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const address = response.data;
    user.address = address;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar endere?o" });
  }
};