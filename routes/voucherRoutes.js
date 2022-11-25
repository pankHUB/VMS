const express = require("express");

const { addVoucher, findVouchers, deleteVoucher, updateVoucher, addExcelVoucher } = require('../controllers/voucherController');

const router = express.Router();

router.post("/add", addVoucher); // Create
router.post("/excelAdd", addExcelVoucher); // Create
router.delete("/:vaucherId", deleteVoucher); // delete
router.get("/get", findVouchers); // get
router.patch("/update", updateVoucher); // update


module.exports = router;