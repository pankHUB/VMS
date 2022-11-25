const Vaucher = require("../models/Voucher");
const xlsx = require('xlsx');
const path = require('path');
const root = path.dirname(require.main.filename);


const addExcelVoucher = async (req, res) => {

  try {
    const xlFile = root + "/xlsxFiles/" + req.file.filename;
    const {userId }= req.body;
    console.log("file", req.file);
    const excelData = xlsx.readFile(xlFile);
    const sheets = excelData.SheetNames;
    const data = [];
    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json(excelData.Sheets[excelData.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }
    data.forEach(async(value)=>{
      const response = await Vaucher.create({
        ...value,
        userId
      })
    })
    console.log(data);
    res.json({ status: "success", data, message:"Created" });
  } catch (err) {
    console.log(`Error : ${err}`);
    res.json({ Error: err });
  }
};
    

const addVoucher = async (req, res) => {
const {
    type ,
    Brand ,
    imageUrl ,
    userId ,
} = req.body;
try {
    const response = await Vaucher.create({
      type,
      Brand,
      imageUrl,
      userId,
    });
    res.json(response);
   } catch (err) {
    res.send({ Error: err });
   }
};

const findVouchers = async (req, res) => {
  try {
    const vauchers = await Vaucher.findAll();
    await res.json(vauchers);
  } catch (err) {
    await res.send({ Error: err });
  }
};

const deleteVoucher = async (req, res) => {
  const {vaucherId} = req.params;
  try {
    const response = await Vaucher.destroy({
      where: { vaucherId },
    });

    res.json(response);
  } catch (err) {
    res.send({ Error: err });
  }
};

const updateVoucher = async (req, res) => {
  const body = req.body;
  try {
    const response = await Vaucher.update(
      {
        ...body,
      },
      {
        where: { vaucherId:body.vaucherId },
      }
    );
    res.send(response);
  } catch (err) {
    res.send({ Error: err });
  }
};

module.exports = {
  addVoucher,
  findVouchers,
  deleteVoucher,
  updateVoucher,
  addExcelVoucher
};
