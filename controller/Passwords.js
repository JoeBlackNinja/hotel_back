const nodemailer = require('nodemailer');
const client = require('../models').client;
const adiDb = require('../');
const { user } = require('pg/lib/defaults');
const req = require('express/lib/request');

const solchangepassword = async (req,res) => {
    const { email, id } = req.body;

    const user_ = await client.findOne({
        where:{
            email:email
        }
    })

    const link_ = `http://localhost:3000/changePass`;
    contentEmail = `
        Restore password.

        link : ${link_}
    `
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth : {
          user : 'luir.postman2022@gmail.com',
          pass : 'F1.denci0'
        }
      });
      
      let info = await transporter.sendMail({
        from : 'luir.postman2022@gmail.com',
        to : `${email}`,
        subject : `Restore password`,
        text : contentEmail
      });

      return res.json({
        id:user_.id,
        email: user_.email
      });
}

const  changepassword = async (req,res) => {
  const {id, pass} = req.body;
  const reschangepassword = await client.updateOne({
      where:{ id: id },
        pass : pass
    })  
  return res.json(reschangepassword);
}

module.exports = {solchangepassword, changepassword};