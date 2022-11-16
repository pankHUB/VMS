const express= require("express");

const usersRoutes = require('./routes/userRoutes');

const router = express.Router();

router.use("/users",usersRoutes);

module.exports = router;