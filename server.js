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
      to: 'austinfujimori@gmail.com',
      from: 'amendoza@g.hmc.edu',
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
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
