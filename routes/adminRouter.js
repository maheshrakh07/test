var express = require("express");
var exe = require("./connection");
var router = express.Router();

router.get("/", function(req,res){
    res.render("adminp/home.ejs")
});


router.get("/basic_info",async function(req,res){
    var data =await exe(`SELECT * FROM basic_info`);
    res.render("adminp/basic_info.ejs",{"data":data})
});

router.post("/save_info",async function(req,res){
    var d = req.body;
    // var sql = `INSERT INTO basic_info(mobile_no,email,address,facebook_link,twitter_link,linkedin_link ,instagram_link ,location , heading) VALUES ('${d.mobile_no}','${d.email}','${d.address}','${d.facebook_link}','${d.twitter_link}','${d.linkedin_link}','${d.instagram_link}','${d.location}','${d.heading}')`;

    var sql = `UPDATE basic_info SET mobile_no='${d.mobile_no}', email='${d.email}',address='${d.address}',facebook_link= '${d.facebook_link}',twitter_link ='${d.twitter_link}',linkedin_link='${d.linkedin_link}',instagram_link='${d.instagram_link}',location='${d.location}',heading='${d.heading}'`;
    // res.send(sql);
    await exe(sql);
    res.redirect("/admin/basic_info")
})


router.get("/slider",async function(req,res){
    var slide = await exe(`SELECT * FROM slider`)
    res.render("adminp/slider.ejs",{"slide":slide})
});

    
router.post("/save_slider", async function(req,res){

    // res.send(req.files);
    var slider_image = new Date().getTime() + req.files.slider_image.name;
    await req.files.slider_image.mv("public/admin/assets/img/"+ slider_image )
    var d = req.body;
    
    var sql = `INSERT INTO slider (slider_title, slider_sub_title,slider_image) VALUES ('${d.slider_title}', '${d.slider_sub_title}' ,'${slider_image}')`;
       
   var data = await exe(sql);
   res.redirect("/admin/slider");
});


module.exports = router ;


// CREATE TABLE basic_info (basic_info_id INT PRIMARY KEY AUTO_INCREMENT , mobile_no INT , email VARCHAR(300) , address VARCHAR(500) , facebook_link VARCHAR(300) , twitter_link VARCHAR(300) , linkedin_link VARCHAR(300) , instagram_link VARCHAR(300) , location VARCHAR(300) , heading VARCHAR(500))

// CREATE TABLE slider (slider_id INT PRIMARY KEY AUTO_INCREMENT , slider_title TEXT , slider_sub_title TEXT , slider_image TEXT)