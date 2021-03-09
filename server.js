// var sendEmail = require('./src/sendgrid');
const sgMail = require('@sendgrid/mail');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World :)');
})

app.get('/email', function (req, res) {
   sgMail.setApiKey('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')
   const msg = {
    to: 'amendoza@g.hmc.edu',
    from: 'college.student.connect@gmail.com',
    subject: 'WHUZZAAAAAAHHHHHHH',
    text: 'hello',
   }
  
   sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    res.send('Email Sent! :)');
})

app.post('/send-email', function (req, res) {
  const { body } = req
  const { submitter_email } = body

  sgMail.setApiKey('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')
   const msg = {
    to: 'amendoza@g.hmc.edu',
    from: 'college.student.connect@gmail.com',
    subject: 'WHUZZAAAAAAHHHHHHH',
    text: 'hello' + submitter_email,
   }
  
   sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    res.send('Email Sent with extra info! :)');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
