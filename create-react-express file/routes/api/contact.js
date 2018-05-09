const router = require("express").Router();
const nodemailer = require("nodemailer");

// /api/contact
router.post("/", (req, res) => {
  console.log(req.body);
  const output = `
<p>You have a new message from the Fueled 4 Life Website</p>
<h3>Contact Details</h3>
<ul>
<li>Name: ${req.body.name}</li>
<li>Email: ${req.body.email}</li>
<li>Subject: ${req.body.subject}</li>
</ul>
<h3>Message:</h3>
<p><li>${req.body.message}</li></p>`;

  

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "llwashburn@gmail.com", // generated ethereal user
      pass: "Dallasowen+25" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });



  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fueled4Life" <llwashburn@gmail.com>',
    to: "llwashburn@gmail.com",
    subject: "Fueled4Life TEST",
    text: "TEST",
    html: output
  }; // sender address // list of receivers // Subject line // plain text body // html body


  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({error: error})
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json({success: true});

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

module.exports = router
