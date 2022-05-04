const express = require( 'express' );
const router = express.Router();

const api = require('../utilities/api');

//UTILITIES
const sendEmail = require('../utilities/email');

//CONTROLLERS
const LoginController = require('../controller/LoginController');
const CreateClient = require('../controller/CreateClient');
const CreateReservation = require('../controller/CreateReservation');
const { send } = require('express/lib/response');

router.get(`${api.path}`, (req, res) => {
    res.status(200).send('Mensaje enviado desde método GET')})

//NEW USER CREATION (NOT CLIENT) Only email and password
router.post(`${api.path}${api.client.createUser}`, CreateClient.newUser)

//NEW CLIENT CREATION AFTER User creation
router.post(`${ api.path }${api.client.createInfoUser}`, CreateClient.newClient)

module.exports = router;