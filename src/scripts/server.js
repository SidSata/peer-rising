const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config(); 

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: ['https://peerrising.com/', 'http://localhost:3001'],
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

  // Read the curriculum file based on the selected subject and grade level
  const filePath = `/Users/siddhant/Desktop/Berkeley Classes/Spring 2023/peer-rising/peer-rising/peer-rising/sample_curricula/${subject}_${gradeLevel}.txt`;
  const curriculum = fs.readFileSync(filePath, "utf-8");

  // create email message
  const message = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your curriculum",
    text: `Here is your curriculum for ${subject} in ${gradeLevel}:\n\n${curriculum}`,
    attachments: [
      {
        filename: `${subject}_${gradeLevel}.txt`,
        content: curriculum,
      },
    ],
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