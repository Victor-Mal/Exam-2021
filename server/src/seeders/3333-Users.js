const bcrypt = require('bcrypt');
const CONSTANTS = require('../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'buyer',
          lastName: 'buyerovich',
          displayName: 'buyer',
          password: await bcrypt.hash('123123', CONSTANTS.SALT_ROUNDS),
          email: 'buyer@mail.com',
          role: CONSTANTS.ROLES.CUSTOMER,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'creative',
          lastName: 'creativovich',
          displayName: 'creative',
          password: await bcrypt.hash('123123', CONSTANTS.SALT_ROUNDS),
          email: 'creative@mail.com',
          role: CONSTANTS.ROLES.CREATOR,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
