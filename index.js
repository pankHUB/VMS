const express = require('express');
const { JSON } = require('sequelize');
const bodyParser = require("body-parser");
const multer  = require('multer');
const cors = require('cors');


const routers = require('./routes');

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null,'./xlsxFiles') 
    },
    filename: (req, file, cb) => {
        cb(null,Date.now()+ "---" +file.originalname) 
    },
})


const upload = multer({ storage: fileStorageEngine });

app.use(cors());


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', upload.single('Test'),routers);

app.use("/",(req,res)=>{
    res.send("Server is Up and Running");
});


app.listen(4500, async()=>{
    try{
        //Create schema first time 
        // const u = await User.sync();
        // const v = await Vaucher.sync();
        console.log(`Database connection has been established successfully.` );
        console.log(`Server start at 3000`);
    }catch(error){
        console.error('Error :', error);
    }
    
})

module.exports = app;