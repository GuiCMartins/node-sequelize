'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Pessoas',
      [
        {
          nome: 'Ana',
          ativo: true,
          email: 'ana@ana.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'João',
          ativo: true,
          email: 'joao@joao.com',
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Marcos',
          ativo: false,
          email: 'marcos@marcos.com',
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  },
};
