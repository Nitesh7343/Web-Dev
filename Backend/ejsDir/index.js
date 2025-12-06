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

app.get("/ig/:username",(req,res) => {
    const { username } = req.params;
    // let names = ["nitu","ashu","pikachu","Dora"];
    const igData = require("./data.json");
    const data = igData[username];
    if(data) res.render("instagram.ejs",{data});
    else res.render("error.ejs");
});

app.get("/dice",(req,res) => {
    let roll = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{roll});
});

app.get("/hello",(req,res) => {
    console.log("Server working");
    res.send("Hemlo Baby");
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})