const Sequelize = require('sequelize');


const connection = require('../database/database');


const ingrediente = connection.define(
    'tb_ingrediente',
    {
        nome_categoria:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);


module.exports = ingrediente;

