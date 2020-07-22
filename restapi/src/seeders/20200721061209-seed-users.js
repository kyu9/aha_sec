'use strict';

import moment from 'moment'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        'users',
        [
          {
            email: '2test@tests.com',
            password: '2test1234',
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
          },
          {
            email: '2test1@tests.com',
            password: '2test1234',
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
          },
          {
            email: '2test2@tests.com',
            password: '2test1234',
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
          }
        ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users',null,{})
  }
};
