const express = require( 'express' );
const router = express.Router();

const api = require('../utilities/api');

//UTILITIES
const sendEmail = require('../utilities/email');

//CONTROLLERS
const LoginController = require('../controller/LoginController');
const CreateClient = require('../controller/CreateClient');
const CreateReservation = require('../controller/CreateReservation');

router.post(`${ api.path } ${api.client.createUser}`, , CreateClient.newClient)