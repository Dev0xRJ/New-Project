const UserService = require('../services/UserService');

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