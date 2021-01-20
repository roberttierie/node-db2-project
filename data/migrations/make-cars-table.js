const { table } = require('../db-config')

exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('name', 128).notNullable().unique();
        table.float('vin', 17).notNullable().unique();
        table.string('make').notNullable().unique();
        table.string('model').notNullable().unique();
        table.float('mileage').notNullable().unique();
        table.string('transmission');
        table.string('status');

    })
}

exports.down = function(knex){
    return knex.schema.dropTableIfExists('cars');
}