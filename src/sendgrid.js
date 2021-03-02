import sgMail from '@sendgrid/mail'

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey('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')


const sendEmail = () => {
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
}

export default sendEmail
