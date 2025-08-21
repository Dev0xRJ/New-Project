const express = require('express');
const app = express();
const port = 3000;


const controller = require('./src/controllers/hello.controller');
const userController = require('./src/controllers/user.controller');
const UserContolller = new userController();
app.use(express.json());

app.get('/', controller.sayHello);
app.get('/users', UserContolller.findAllUsers);
app.post('/users', UserContolller.createUser);
app.get('/user-by-name', UserContolller.getUserByName)
app.get('/user-by-cep', UserContolller.getUserByCep)
UserContolller.getUsers(req, res)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

