const path = require('path');

const INDEX_FILE = path.resolve(__dirname, '../../client/dest/index.html');
const APP_FILE = path.resolve(__dirname, '../../client/dest/app.js');
const APP_STYLE = path.resolve(__dirname, '../../client/dest/style.css');

module.exports.app = function (req, res) {
  res.sendFile(APP_FILE);
}

module.exports.style = function (req, res) {
  res.sendFile(APP_STYLE);
}

module.exports.index = function (req, res) {
  res.sendFile(INDEX_FILE);
}