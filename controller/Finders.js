const client = require('../models').client;

const findClient = async (req,res) => {
    const {email} = req.body;
    try {
        const logeo = await client.findOne({
            where:{
                email:email
            }
        });
    //const token = await tokenImport(logeo.dataValues.id);
    return res.status(200).json(logeo);
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = {findClient};