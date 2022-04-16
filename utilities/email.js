const nodemailer = require('nodemailer');

const email = async () => {
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
    to : 'chemanace@gmail.com',
    subject : "Correo de prueba hotel bootcamp madafaka",
    text : 'Esto es un correo hijueputa hijueputa hijueputa'
  });

  console.log('Message sent', info.messageId);

  return (info.messageId);

};

module.exports = email;