const express = require('express');

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/teste', (req, res) => {
  res.status(200).send({ mensagem: 'Bem vindo' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na poorta: ${PORT}`);
});

module.exports = app;
