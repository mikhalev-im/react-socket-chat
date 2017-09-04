const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(routes);
require('./configureSocket')(io);

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});