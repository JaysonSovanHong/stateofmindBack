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
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ECGPvC0q6Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Sossus, Namibia",
                type: "Desert",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1IDGPPmSgF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Farafra, Egypt",
                type: "Desert",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DNwtwIzwQpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Gobi Desert, Monogolia",
                type: "Desert",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oLMVrk5xGw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Maldive",
                type: "Beach",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eFhqTD0qouw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/O_9TgmIg1nA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Turk and Caicos",
                type: "Beach",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tGyosOcayPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Mount Everest, Nepal",
                type: "Mountain",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tcmH0__c7aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Vinicunca, Peru",
                type: "Mountain",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sZea8_ktn9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Kirkjufell, Iceland",
                type: "Mountain",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hVGF-U8Afss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Matterhorn, Switzerland",
                type: "Mountain",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BY2bpNWoNJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bali, Indonesia",
                type: "Exotic",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2b9txcAt4e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "South Africa, Africa",
                type: "Exotic",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZDTFtx3yFSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Ilulissat, Greenland",
                type: "Exotic",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UyFuAat3lFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Siem Reap, Cambodia",
                type: "Exotic",
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MSpPUFdYpJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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