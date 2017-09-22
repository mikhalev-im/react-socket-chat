const MAX_MESSAGES = 30;

let messages = []

module.exports.getMessages = function() {
  return messages;
}

module.exports.addMessage = function(message) {
  messages.push(message);
  messages = messages.slice(-MAX_MESSAGES);
  return;
}