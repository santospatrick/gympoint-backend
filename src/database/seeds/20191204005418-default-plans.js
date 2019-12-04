const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'plans',
      [
        {
          title: 'Start',
          price: '129.00',
          duration: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Gold',
          price: '109.00',
          duration: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Diamond',
          price: '89.00',
          duration: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
