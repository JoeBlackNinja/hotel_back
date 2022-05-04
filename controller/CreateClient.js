const client = require("../models").client;
const bcrypt = require('../utilities/encriptador');
const tokenImport = require('../utilities/webtoken');
const correo = require('../utilities/email');

/* const newClient = async (req, res, next) => {
  try {
    const {
      id,
      name,
      last_name,
      address,
      city,
      state,
      country,
      cellphone,
      email,
      account_type,
    } = req.body;

    return (newClientReq = await client
      .create({
        name: name,
        last_name: last_name,
        address: address,
        city: city,
        state: state,
        country: country,
        cellphone: cellphone,
        email: email,
        account_type: account_type,
      })
      .then((usuario) => res.status(200).send(usuario)));
  } catch (error) {
    return (error) => res.status(400);
  }
}; */

const newUser = async (req, res, next) => {
  try {
    const { email, pass } = req.body;
    const newUserReq = await client
      .create({
        email: email,
        pass: pass,
      })
  
    const envioCorreo = await correo(newUserReq.email, );
    
    const cryptoObject = {
      id : newUserReq.dataValues.id,
      messageId : envioCorreo 
    }
    const token = await tokenImport(cryptoObject); 

    return res.status(200).json(token) 

  } catch (error) {
    return (error = res.status(400));
  }
};

const newClient = async (req,res) => {
  try {
    const {
      id,
      name,
      last_name,
      address,
      city,
      state,
      country,
      cellphone,
      email,
      account_type,
    } = req.body;
  
    const clienteNuevo = await client.update({
      name: name,
      last_name: last_name,
      address: address,
      city: city,
      state: state,
      country: country,
      cellphone: cellphone,
      email: email,
      account_type: account_type,
    }, {where:{id}});

    const nuevoCliente = await client.findOne({
      where:{
        id:id
      }
    })

    return res.status(200).json(nuevoCliente);
  } catch (error) {
    
  }
  


}

module.exports = { newClient, newUser };
