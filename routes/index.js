const LoginController = require('../controller/LoginController');
const CreateClient = require('../controller/CreateClient');
const CreateReservation = require('../controller/CreateReservation');

module.exports = (app) => {
    
    app.get('/api',(req,res) => {
        res.status(200).send('Mensaje enviado desde método GET');
    })

     /* ******************************************************************************************************  */

    //NUEVO CLIENTE EN LA PLATAFORMA, SOLO PIDE CORREO Y PASSWORD
    app.post('/user/create/email/:email/pass/:pass',
        LoginController.createUsuario);

    //NUEVO CLIENTE YA REGISTRADO EN LA PLATAFORMA CON SU CORREO Y PASSWORD
    app.post('/client/newClient/name/:name/last_name/:last_name/address/:address/city/:city'+
                '/state/:state/country/:country/cellphone/:cellphone/email/:email'+
                '/account_type/:account_type', CreateClient.newClient);

    //NUEVA RESERVACION PARA CLIENTES YA REGISTRADOS
    app.post('/reservations/reservation_date/:reservation_date/time/:time/ingres_date/:ingres_date'+
                '/out_date/:out_date/cash/:cash/transaction_number/:transaction_number/total/:total',CreateReservation.newReservations);


    /* ******************************************************************************************************  */

    app.get('/user/list', LoginController.list);

    app.get('/user/finduser/id/:id',
        LoginController.findUser);



}
