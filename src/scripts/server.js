const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose')
const Request = require('./models/request');

require('dotenv').config(); 


app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: ['https://peerrising.com/teachers', 'https://8e4e-142-254-1-167.ngrok-free.app' ,'https://peerrising.com/', 'http://localhost:3001'],
  methods: 'POST',
  optionsSuccessStatus: 200,
};

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


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
  const request = new Request({ subject, gradeLevel, email });
  let error = null;

  request.save().then(() => {
    console.log('Request saved to database');
    // send email to user
    // res.sendStatus(200);
  }).catch((err) => {
    console.error('Error saving request to database:', err);
    error = err.message;
    // res.sendStatus(500);
  });

  if (error) {
    // Send an error response with the error message
    res.status(500).json({ error });
  }
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
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      error = err.message
      // res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      // res.status(200).send('Email sent successfully');
    }
  });
  if (!error) {
  res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.post('/contact', cors(corsOptions), (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received:', name, email, message);

  // Read the curriculum file based on the selected subject and grade level
  // const filePath = `/Users/siddhant/Desktop/Berkeley Classes/Spring 2023/peer-rising/peer-rising/peer-rising/sample_curricula/${subject}_${gradeLevel}.txt`;
  // const curriculum = fs.readFileSync(filePath, "utf-8");
  // const request = new Request({ subject, gradeLevel, email });
  // let error = null;

  // request.save().then(() => {
  //   console.log('Request saved to database');
  //   // send email to user
  //   // res.sendStatus(200);
  // }).catch((err) => {
  //   console.error('Error saving request to database:', err);
  //   error = err.message;
  //   // res.sendStatus(500);
  // });

  // if (error) {
  //   // Send an error response with the error message
  //   res.status(500).json({ error });
  // }
  // // create email message
  // const message = {
  //   from: process.env.EMAIL,
  //   to: email,
  //   subject: "Your curriculum",
  //   text: `Here is your curriculum for ${subject} in ${gradeLevel}:\n\n${curriculum}`,
  //   attachments: [
  //     {
  //       filename: `${subject}_${gradeLevel}.txt`,
  //       content: curriculum,
  //     },
  //   ],
  // };

  // // send email
  // transporter.sendMail(message, (err, info) => {
  //   if (err) {
  //     console.log(err);
  //     error = err.message
  //     // res.status(500).send('Error sending email');
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //     // res.status(200).send('Email sent successfully');
  //   }
  // });
  // if (!error) {
  // res.sendStatus(200);
  // } else {
  //   res.sendStatus(500);
  // }
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});