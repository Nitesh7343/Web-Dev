const express = require("express");
const path = require("path");
let app = express();

let port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res) => {
    console.log("Server working");
    res.render("home.ejs");
});

app.get("/hello",(req,res) => {
    console.log("Server working");
    res.send("Hemlo Baby");
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})