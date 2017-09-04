let messages = []

module.exports.getMessages = function() {
  return messages;
}

module.exports.addMessage = function(message) {
  messages.push(message);
  return;
}