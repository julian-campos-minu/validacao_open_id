require('dotenv').config();

var connect = require('connect');
var serveStatic = require('serve-static');
const cors = require('cors');

const express = require('express');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.get("/code", async (req, res) => {
  const data = {
    "userName": process.env.USERNAME_COMPANY,
    "password": process.env.PASSWORD_COMPANY,
    "data": {
      cpf: process.env.CPF,
      externalContextId: process.env.EXTERNAL_CONTEXT_ID,
      // surname: 'Julian',
      mobile: process.env.MOBILE,
      email: process.env.EMAIL,
      name: process.env.NAME,
      sponsor: process.env.SPONSOR,
      planId: process.env.PLANID
    }
  }

  const response = await fetch(
    'http://minu-clube.k8s-hmg.internal/api/authorize',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'client_id': process.env.CLIENT_ID,
        'client_secret': process.env.CLIENT_SECRET
      },
      body: JSON.stringify(data)
    }
  );

  const result = await response.json();
  res.send({ url: `http://hmg.clube.broto.com.br/?code=${result.code}`});
});

app.post('/register-user', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

connect().use(serveStatic(__dirname)).listen(3000, function (a, b) {
  console.log('Servidor iniciado!');
});