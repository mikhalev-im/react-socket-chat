const User = require('../models/user');

module.exports.login = function(req, res) {
  res.json(User.authenticate(req.body.nickname, req.body.password));
}

module.exports.register = function(req, res) {  
  let result = {
    result: true
  };

  try {
    User.addUser(req.body.nickname, req.body.password);
  } catch (e) {
    result.result = false;
    result.errorMessage = e.message;
  }

  res.json(result);
}