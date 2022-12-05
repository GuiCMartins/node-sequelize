const express = require('express');
const pessoas = require('./PessoasRoutes');

module.exports = (app) => {
  app.use(express.json(), pessoas);
};
