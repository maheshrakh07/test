var express = require("express");
var upload = require("express-fileupload");
var session = require("express-session")
var app = express();

var userRouter = require("./routes/userRoouter")
var adminRouter = require("./routes/adminRouter")

app.use(session({
    secret:"a2z it hub",
    resave:false,
    saveUninitialized:true
}))

app.use(upload());

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/", userRouter);
app.use("/admin",adminRouter)


app.listen(1000);

