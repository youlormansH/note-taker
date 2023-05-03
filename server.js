const express = require('express');
const path = require('path');
const api = require('./routes/ApiRoute.js');
const html= require("./routes/route")
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/',html)

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});
