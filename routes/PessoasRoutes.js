const express = require('express');
const usePessoasController = require('../controllers/PessoaController');

const router = express.Router();
const pessoasController = usePessoasController();

const url = '/pessoas';

router.get(url, pessoasController.get);

module.exports = router;
