const { Op } = require("sequelize");
const User = require("../models/User");

const addUser = async (req, res) => {
  const { emailId, employeeId, firstName, lastName, mobileNo } = req.body;
  try {
    const doc = await User.create({
      emailId,
      employeeId,
      firstName,
      lastName,
      mobileNo,
    });

    res.json(doc);
  } catch (err) {
    res.send({ Error: err });
  }
};

const findUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    await res.send(users);
  } catch (err) {
    await res.send({ Error: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await User.destroy({
      where: { id: req.params.id },
    });

    res.json(response);
  } catch (err) {
    res.send({ Error: err });
  }
};

const updateUser = async (req, res) => {
  const body = req.body;
  try {
    const response = await User.update(
      {
        ...body,
      },
      {
        where: { ...req.params},
      }
    );
    res.send(response);
  } catch (err) {
    res.send({ "Error": err });
  }
};

module.exports = {
  addUser,
  findUsers,
  deleteUser,
  updateUser,
};


