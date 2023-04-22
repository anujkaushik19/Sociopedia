router.get("/email", async (req, res) => {
    try {
      const { email } = req.body;
      const otp = Math.floor(Math.random() * 10000);
      if (otp < 1000 || otp > 9999) otp = 6969;
      console.log(otp);
  
      const response = await axios({
        method: "post",
        url: "https://api.sendinblue.com/v3/smtp/email",
        headers: {
          "api-key": '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',
          "content-type": "application/json",
        },
        data: {
          sender: {
            name: "Sociopedia",
            email: "anujkaushik.kaushik56@gmail.com",
          },
          to: [
            {
              email: email,
              name: 'anuj',
            },
          ],
          subject: "Registration OTP Sociopedia",
          htmlContent: `<p>Your registration otp for Sociopedia is ${otp}</p>`,
          replyTo: {
            email: "anujkaushik.kaushik56@gmail.com",
            name: "Sociopedia",
          },
        },
      });
  
      console.log("Email sent successfully:", response.data);
      // console.log('Email sent successfully:');
      res.status(200).json(otp);
    } catch (error) {
      console.log('error is ')
      res.status(500).json( error );
    }
  });
  