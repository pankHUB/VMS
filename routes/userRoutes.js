const express = require("express");

const { addUser, findUsers , deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.post("/add", addUser); // Create
router.get("/get", findUsers); // Read
router.post("/update/:id", updateUser); // Update
router.delete("/delete/:id", deleteUser); // Delete


module.exports = router;