const express = require('express');
const app = express();
const port = 3000;


const controller = require('./src/controllers/hello.controller');
app.use(express.json());

app.get('/', controller.sayHello);
UserContolller.getUsers(req, res)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

