const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const email = async (email, infoClienteReservation) => {
  contentEmail = `
   Reservation information:
      Number reservation: ${infoClienteReservation.id}
      Room type : ${infoClienteReservation.id_type_room_fk}
      Date of reservation : ${infoClienteReservation.reservation_date}
      Time of reservation :${infoClienteReservation.time}
      Date ingres:${infoClienteReservation.ingres_date}
      Date depart:${infoClienteReservation.out_date}
      Pay:$${infoClienteReservation.cash}
      Transaction number:${infoClienteReservation.transaction_number}
      Total:${infoClienteReservation.total}   
  `;

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
    subject : `Succesfull reservation BackPacker Hostel`,
    text : contentEmail
  });

  /* let token = jwt.sign({email}, 'cantiLever', {
    expiresIn : 1000
  })
  return res.send({token}); */
  return info.messageId; 
};

module.exports = email;