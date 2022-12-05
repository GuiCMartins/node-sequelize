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

  return {
    get,
  };
};

module.exports = usePessoaController;
