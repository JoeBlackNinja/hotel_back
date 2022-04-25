const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const email = async (email, pass, res ) => {
  // contentHTML = `
  //   <h1>User information</h1>
  //     <ul>
  //       <li>Username: ${body.name}</li>
  //       <li>Email: ${body.email}</li>
  //       <li>Phone: ${body.phone}</li>
  //     </ul>
  //     <p>${body.message}</p>
  // `;

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
    subject : "Correo de prueba hotel bootcamp madafaka",
    text : `Bienvenue ${pass} at to Hostel MDFK`
  });

  console.log('Message sent', info.messageId);

  let token = jwt.sign({email}, 'cantiLever', {
    expiresIn : 1000
  })
  return res.send({token});
};

module.exports = email;