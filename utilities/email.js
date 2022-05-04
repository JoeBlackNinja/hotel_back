const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const email = async (email, link) => {
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
    subject : "Welcome to BackPacker's Hostel",
    text : `Welcome to BackPacker's Hostel.\n
            follow the next link for confirmation account: ${link}`
  });

  /* let token = jwt.sign({email}, 'cantiLever', {
    expiresIn : 1000
  })
  return res.send({token}); */
  return info.messageId; 
};

module.exports = email;