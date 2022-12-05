const express = require('express');
const usePessoasController = require('../controllers/PessoaController');

const router = express.Router();
const pessoasController = usePessoasController();

const url = '/pessoas';

router.get(url, pessoasController.get);
router.get(`${url}/:id`, pessoasController.getById);
router.post(url, pessoasController.post);
router.put(`${url}/:id`, pessoasController.put);
router.delete(`${url}/:id`, pessoasController.remove);

module.exports = router;
