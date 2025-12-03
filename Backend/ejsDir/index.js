const express = require("express");

let app = express();

let port = 8080;

app.set("view engine", "ejs");

app.get("/",(req,res) => {
    console.log("Server working");
    res.render("home.ejs");
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})