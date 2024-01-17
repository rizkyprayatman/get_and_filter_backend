'use strict';

const category = require('../models/category');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    return queryInterface.bulkInsert('categories', [{
      id: 1,
      title: `Food & Beverage`,
      category_code: 'F',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      title: `Pharmaceuticals`,
      category_code: 'P',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      title: `Government`,
      category_code: 'G',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      title: `Traditional Medicine & Suplement`,
      category_code: 'T',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      title: `Beauty, Cosmetics & Personal Care`,
      category_code: 'B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      title: `Media RTU`,
      category_code: 'M',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      title: `K3L Products`,
      category_code: 'K',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 16,
      title: `ALKES & PKRT`,
      category_code: 'A',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 17,
      title: `Feed, Pesticides & PSAT`,
      category_code: 'E',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      title: `Others`,
      category_code: 'L',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 19,
      title: `Research / Academic Purpose`,
      category_code: 'R',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 20,
      title: `Dioxine Udara`,
      category_code: 'D',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
