const SibApiV3Sdk = require('sendinblue-api');
const {ApiClient, DefaultApi} = SibApiV3Sdk;
console.log('in sendin',ApiClient)
const apiKey = SibApiV3Sdk.ApiClient.instance.authentications['api-key'];


// Configure API key authorization: api-key


apiKey.apiKey = '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';

const sendMail = (to, subject, text) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.to = [{ email: to }];
  sendSmtpEmail.sender = { name: 'Anuj Kaushik', email: 'anujkaushik.kaushik56@gmail.com' };
  sendSmtpEmail.textContent = text;

  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(function(data) {
      console.log('Email sent successfully: ' + JSON.stringify(data));
    }, function(error) {
      console.error('Error sending email: ' + error);
    });
};

module.exports = sendMail;
