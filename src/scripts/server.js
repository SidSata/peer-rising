const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); 

app.use(cors());


const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'POST',
  optionsSuccessStatus: 200
};



let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ADDRESS, // your email address
    pass: process.env.EMAIL_PASSWORD, // your email password
  },
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.options('/submit', cors(corsOptions));


app.post('/submit', cors(corsOptions), (req, res) => {
  const { subject, gradeLevel, email } = req.body;
  console.log('Received:', subject, gradeLevel, email);


  // create email message
  let message = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: 'Your curriculum request',
    text: `Thank you for your interest in our ${subject} curriculum for ${gradeLevel} students!`,
  };

  // send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
  // Handle the data here as needed, for example:
  // Send an email to the user
  // Store the data in a database
  // Send the data to another API or service
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});