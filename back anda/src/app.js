const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser=require("body-parser");
const registerRoute= require('./route/RegisterRoute');
const loginRoute = require('./route/LoginRoute');


app.use(cors());
app.use(express.json());
app.use(registerRoute);
app.use(loginRoute);
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static("public"));

module.exports = app;