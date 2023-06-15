const express = require("express");
const mail = express();

mail.use(express.json());

mail.post("/api/send-email", (req, res) => {
  const { to, subject, content } = req.body;

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({});

  const mailOptions = {
    from: "tucorreo@example.com",
    to,
    subject,
    text: content,
  };

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.error(error);
        res.status(500).json({error: 'Error al enviar el correo electronico'});
    }else{
        console.log('Correo enviado: ',info.response);
        res.status(200).json({message: 'Correo enviado exitosamente' });
    }
  })

  const port = 3001;

  mail.listen(port,()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
  })

});
