const express = require('express');
const path = require('path');
const api = require('./routes/ApiRoute.js');
const html= require("./routes/route")
const PORT = process.env.PORT || 3001;

const app = express();
