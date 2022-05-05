const reservation = require('../models').reservations;
const emailEnvio = require('../utilities/email');
const tokenImport = require('../utilities/webtoken')

/* module.exports = {
    newReservations(req,res){
        return reservation.create({
            reservation_date:       req.params.reservation_date,
            time:                   req.params.time,
            ingres_date:            req.params.ingres_date,
            out_date:               req.params.out_date,
            cash:                   req.params.cash,
            transaction_number:     req.params.transaction_number,
            total:                  req.params.total            
        }).then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(error));
    }
} */

const nuevaReservacion = async (req,res) => {

    const date_ = new Date();
    let year = date_.getFullYear();
    let month = date_.getMonth();
    let day = date_.getDate();

    let reservation_date = `${month}/${day}/${year}`;
    
    console.log(reservation_date);

    const date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);

    try {
    const {
        id_type_room_fk,
        /* reservation_date, */
        /* time, */
        ingres_date,
        out_date,
        cash,
        transaction_number,
        total,
        id_client,
        email    
    } = req.body;

    const crearReservacion = await reservation.create({
        id_type_room_fk: id_type_room_fk,
        reservation_date:reservation_date,
        time:time,
        ingres_date:ingres_date,
        out_date:out_date,
        cash:cash,
        transaction_number:transaction_number,
        total:total,
        id_client:id_client,
        email:email            
    });

    const emailReservacion = await emailEnvio(crearReservacion.dataValues.email, crearReservacion.dataValues);
    
    const token = tokenImport(crearReservacion.dataValues.id);

    return res.status(200).json(token);

    }

    catch (error) {
        
    }

}

module.exports = {nuevaReservacion};