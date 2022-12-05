const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na poorta: ${PORT}`);
});

module.exports = app;
