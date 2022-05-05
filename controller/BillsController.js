const bills = require('../models/bills');

const billCreator = async (req,res) => {
    try {
        const {
            id_reservation_fk,
            id_employes_fk,
            id_client_fk,
            date_bills,
            services,
            charges,
            cash,
            transaction_number,
            total
        } = req.body;
        
        const ResBillCreator = await bills.create({
            id_reservation_fk : id_reservation_fk,
            id_employes_fk : id_employes_fk,
            id_client_fk : id_client_fk,
            date_bills : date_bills,
            services : services,
            charges : charges,
            cash : cash,
            transaction_number : transaction_number,
            total : total
        });

    } catch (error) {
        
    }
}