const express = require('express');
const router = express.Router();

const homeController = require('./controllers/home');
const apiController = require('./controllers/api');;
const statisController = require('./controllers/static');;

router.get('/', homeController.home);

router.post('/api/login', apiController.login);
router.post('/api/register', apiController.register);

router.get('/app.js', statisController.app);
router.get('/style.css', statisController.style);
router.get('*', statisController.index);

module.exports = router;
