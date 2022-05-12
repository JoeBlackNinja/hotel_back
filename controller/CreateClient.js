const client = require("../models").client;
const bcrypt = require('../utilities/encriptador');
const tokenImport = require('../utilities/webtoken');
const correo = require('../utilities/email');
const randomFunction = require('../utilities/random')

const newUser = async (req, res, next) => {
  try {
    const { email, pass, idclient } = req.body;     
    const idGenerado = randomFunction(idclient);    
    const newUserReq = await client
      .create({
        id: idGenerado,
        email: email,
        pass: pass,
      })    
    console.log(newUserReq.dataValues.email)
    const envioCorreo = await correo(newUserReq.dataValues.email,"Chucapsor");
    
    const cryptoObject = {
      id : newUserReq.dataValues.id,
      messageId : envioCorreo 
    }
    const token = await tokenImport(cryptoObject); 

    return res.status(200).json(newUserReq) 

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
