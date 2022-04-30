const client = require('../models').client;

exports.newClient = async (req,res,next) => {
    try {
        const {
            name,
            last_name,
            address,
            city,
            state,
            country,
            cellphone,
            email,
            account_type
        } = req.body;
        
        return newUserReq = await client.create({
            name:name,
            last_name:last_name,
            address:address,
            city:city,
            state:state,
            country:country,
            cellphone:cellphone,
            email:email,
            account_type:account_type
        }).then(usuario => res.status(200).send(usuario));       

    } catch (error) {
        return error => res.status(400);
    }
        // return client.create({
        //     name:req.params.name,
        //     last_name:req.params.last_name,
        //     address:req.params.address,
        //     city:req.params.city,
        //     state:req.params.state,
        //     country:req.params.country,
        //     cellphone:req.params.cellphone,
        //     email:req.params.email,
        //     account_type:req.params.account_type
        // })
}