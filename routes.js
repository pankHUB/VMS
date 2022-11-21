const express= require("express");

const usersRoutes = require('./routes/userRoutes');
const voucherRoutes = require('./routes/voucherRoutes');

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/voucher", voucherRoutes)

module.exports = router;