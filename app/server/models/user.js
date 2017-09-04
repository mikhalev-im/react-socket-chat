let users = {}

module.exports.addUser = function(login, password) {
  if (users[login]) {
    throw new Error('User with this login already exists');
  }

  users[login] = {
    login,
    password
  }

  return;
}

module.exports.deleteUser = function(login) {
  delete users[login]
  return;
}

module.exports.findUser = function(login) {
  return users[login] || null;
}

module.exports.authenticate = function(login, password) {
  let result = false;
  let user = this.findUser(login);

  if (user && user.password === password) {
    result = true
  }

  return result;
}