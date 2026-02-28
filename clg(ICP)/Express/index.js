const express = require('express');
const path = require('path');
const app = express();

// app.get("/",(req,res) => {
//     res.send("Server is connected as port 8000")
// });
// app.get("/home",(req,res) => {
//     res.send("This is home page")
// });
// app.get("/about",(req,res) => {
//     res.send("This is about page")
// });
// app.get("/contact",(req,res) => {
//     res.send("Contact page")
// });
// app.get("/hello",(req,res) => {
//     res.send("Hello page ")
// });
// app.use((req,res) => {
//     res.send("404 : not found");
// });

const file1 = path.join(__dirname,"/component/index.html")

app.get("/",(req,res) => {
    res.sendFile(file1);
})

app.listen(8080);