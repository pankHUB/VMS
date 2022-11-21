const { DataTypes, Sequelize } = require('sequelize') ;
const Voucher = require('./Voucher');

const sequelize = require('../db/sequelize');

const User = sequelize.define('user',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    employeeId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailId: {
        type: DataTypes.STRING(60),
        validate: {
            isEmail: true
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    mobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isInt: { args: true, msg: "You must enter Phone Number" },
        }
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
});

User.hasMany(Voucher, {
    foreignKey: 'userId',
    constraints: false,
    scope: {
      commentableType: 'user'
    }
});
  

module.exports = User;

