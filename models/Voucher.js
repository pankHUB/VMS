const { DataTypes, Sequelize } = require('sequelize') ;

const sequelize = require('../db/sequelize');
const User = require('./User');

const Vaucher = sequelize.define('voucher',{
    vaucherId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4()
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imageURL:{
        type: DataTypes.STRING
    },
    startDate:{
        type: DataTypes.DATE
    },
    endDate:{
        type: DataTypes.DATE
    },
    userId:{
        type: DataTypes.BIGINT,
        foreignKey: true
    }   
});


module.exports= Vaucher;

