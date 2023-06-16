const express = require("express");
const cors = require("cors");
const app = express();

const nodemailer = require("nodemailer");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); //middleware para analizar el cuerpo de la solicitud como JSON

app.post("/enviar-correo", (req, res) => {
  console.log("Cuerpo de la solicitud: ", req.body);
  const { destino, asunto } = req.body;

  //transporte de correo
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
      user: "proobmail17@gmail.com",
      pass: "ProobMail_1",
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  //configura contenido del correo

  const mailOptions = {
    from: "proobmail17@gmail.com",
    to: destino,
    subject: asunto,
    text: "Esta es una prueba de correo de blutter",
  };

  //envia el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo: ", error);
      res.status(500).json({ message: "Error al enviar el correo" });
    } else {
      console.log("Correo enviado: ", info.response);
      res.status(200).json({ message: "Correo enviado exitosamente" });
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor en ejecucion en el puerto 3001");
});
