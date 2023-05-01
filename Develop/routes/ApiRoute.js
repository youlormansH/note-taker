const router = require ("express").Router()

const { json } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/notes",function (req,res){
    fs.readFile("db/db.json", "utf-8", function (err, data){
err ? console.log (err) : res.json(JSON.parse(data))
    })
});
