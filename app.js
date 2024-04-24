const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

mongoose
    .connect(process.env.DB,{
    // mongoose 5.3.0 이상 버전부터는 default 기능으로 내장
    useNewUrlParser : true,  
    useUnifiedTopology : true,
})
.then(()=>console.log("connected to database"));

module.exports = app;


