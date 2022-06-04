const db_2 = require('../models/db_2');
const Users = db_2.users;

// register and save a new users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a users
  const users = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  // Save users in the database
  Users.create(users)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the users.',
      });
    });
};

// login users
exports.login = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a users
  const users = {
    email: req.body.email,
    password: req.body.password,
  };

  // Save users in the database
  Users.findOne({
    where: {
      email: users.email,
      password: users.password,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the users.',
      });
    });
};
