const database = require('../models');

const usePessoaController = () => {
  const get = async (req, res) => {
    try {
      const pessoas = await database.Pessoas.findAll();

      return res.status(200).json(pessoas);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

  const getById = async (req, res) => {
    const { id } = req.params;

    try {
      const pessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

  const post = async (req, res) => {
    const novaPessoa = req.body;

    try {
      const pessoaCriada = await database.Pessoas.create(novaPessoa);

      return res.status(200).json(pessoaCriada);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

  const put = async (req, res) => {
    const { id } = req.params;
    const novaInformacoes = req.body;

    try {
      await database.Pessoas.update(novaInformacoes, {
        where: { id: Number(id) },
      });

      return res.status(200).json('Pessoa atualizada com sucesso');
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

  const remove = async (req, res) => {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({
        where: { id: Number(id) },
      });

      return res.status(200).json('Pessoa removida com sucesso');
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

  return {
    get,
    getById,
    post,
    put,
    remove,
  };
};

module.exports = usePessoaController;
