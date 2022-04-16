const reservation = require('../models').reservations;

module.exports = {
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
}