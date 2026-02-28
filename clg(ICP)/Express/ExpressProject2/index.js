const express = require("express");
const path = require("path");

const app = express();

const public_path = path.join(__dirname,"public");

app.use(express.static(public_path));

app.get("/",(req,res) => {
    res.sendFile(`${public_path}/dashboard.html`);
});
app.get("/dashboard",(req,res) => {
    res.sendFile(`${public_path}/dashboard.html`);
});
app.get("/home",(req,res) => {
    res.sendFile(`${public_path}/home.html`);
});
app.get("/about",(req,res) => {
    res.sendFile(`${public_path}/about.html`);
});
app.get("/contact",(req,res) => {
    res.sendFile(`${public_path}/contact.html`);
});

app.use((req,res) => {
    res.sendFile(`${public_path}/404.html`);
});


app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});