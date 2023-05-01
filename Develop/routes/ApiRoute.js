const router = require ("express").Router()

const { json } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/notes",function (req,res){
    fs.readFile("db/db.json", "utf-8", function (err, data){
err ? console.log (err) : res.json(JSON.parse(data))
    })
});
router.post("/notes",function(req, res){
    fs.readFile("db/db.json", function(err, data){
        if(err) throw err
        var parsedData = JSON.parse(data)
        var newnotes = {
          id : uuidv4(), 
          title : req.body.title, text : req.body.text
        }
        parsedData.push(newnotes)
        fs.writeFile("db/db.json",JSON.stringify(parsedData), function(err){
            err ? console.log(err) : res.redirect("/notes")
        })
    })
})
