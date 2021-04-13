'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('cities', [{
                name: "Marrakesh, Morocco",
                type: "Desert",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Sossus, Namibia",
                type: "Desert",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Farafra, Egypt",
                type: "Desert",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Gobi Desert, Monogolia",
                type: "Desert",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Maldive",
                type: "Beach",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Seychelles",
                type: "Beach",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bora Bora",
                type: "Beach",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Turk and Caicos",
                type: "Beach",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Mount Everest, Nepal",
                type: "Mountain",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Vinicunca, Peru",
                type: "Mountain",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Kirkjufell, Iceland",
                type: "Mountain",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Matterhorn, Switzerland",
                type: "Mountain",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bali, Indonesia",
                type: "Exotic",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "South Africa, Africa",
                type: "Exotic",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Ilulissat, Greenland",
                type: "Exotic",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Siem Reap, Cambodia",
                type: "Exotic",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};