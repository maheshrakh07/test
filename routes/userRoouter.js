var express = require("express");
var exe = require("./connection");
var router = express.Router();


router.get("/",async function(req,res){
    var basic_info = await exe("SELECT * FROM basic_info");
    res.render("user/home.ejs",{"basic_info":basic_info})
});


router.get("/about",async function(req,res){
    var basic_info = await exe("SELECT * FROM basic_info");

    res.render("user/about.ejs",{"basic_info":basic_info});
});

router.get("/service",async function(req,res){
    var basic_info = await exe("SELECT * FROM basic_info");

    res.render("user/service.ejs",{"basic_info":basic_info});
});

router.get("/team",async function(req,res){
    var basic_info = await exe("SELECT * FROM basic_info");

    res.render("user/team.ejs",{"basic_info":basic_info});
});

router.get("/contact",async function(req,res){
    var basic_info = await exe("SELECT * FROM basic_info");

    res.render("user/contact.ejs",{"basic_info":basic_info});
});

router.get("/appointment",async function(req,res){
    var basic_info = await exe("SELECT * FROM basic_info");

    res.render("user/appointment.ejs",{"basic_info":basic_info});
});



module.exports = router;
