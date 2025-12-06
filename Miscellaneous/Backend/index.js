const express = require("express");
const app = express();

const post = 5050;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(post,() => {
    console.log(`Server is running on port ${post}`);
});


app.get("/register",(req,res) => {
    let {user,pass} = req.query;
    res.send(`Hello ${user} your password is ${pass} and the server is working, it is a GET request`);
});

app.post("/register",(req,res) => {
    let {user,pass} = req.body;
    console.log("Content-Type:", req.headers["content-type"]);
    console.log("Body received:", req.body);
    res.send(`Hello ${user} your password is ${pass} and the server is working, it is a POST request`);
});