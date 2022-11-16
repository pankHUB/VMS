const express = require('express');
const { JSON } = require('sequelize');
const bodyParser = require("body-parser");
const cors = require('cors')

const User = require('./models/User');

const routers = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routers);

app.use("/",(req,res)=>{
    res.send("Server is Up and Running");
});


app.listen(3000, async()=>{
    try{
        //Create schema first time 
        //const response = await User.sync();
        console.log(`Database connection has been established successfully.` );
        console.log(`Server start at 3000`);
    }catch(error){
        console.error('Unable to connect 3000 :', error);
    }
    
})