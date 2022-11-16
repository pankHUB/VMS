const { DataTypes, Sequelize } = require('sequelize') ;

const sequelize = require('../db/sequelize');

module.exports = sequelize.define('user',{
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
    }
});

//User.sync().then((res)=>console.log(res)).catch(err=>console.log(err));;
