const express = require('express');
const OngCotroller = require('./controllers/OngController');
const IncidentCotroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngCotroller.index);
routes.post('/ongs', OngCotroller.create);

routes.post('/incidents', IncidentCotroller.create);
routes.get('/incidents', IncidentCotroller.index);
routes.delete('/incidents/:id', IncidentCotroller.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;