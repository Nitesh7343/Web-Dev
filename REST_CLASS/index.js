const express = require("express");
const app = express();

const port = 3000;

const path = require("path");

app.use(express.urlencoded({ extended:true }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username:"bunnny",
        content:"bunny codes everything."
    },
    {
        username:"dora",
        content:"dora eats momos."
    },
    {
        username:"panda",
        content:"panda loves sleeping."
    },
    {
        username:"kitty",
        content:"kitty meows all day."
    },
    {
        username:"kitkat",
        content:"kitkat loves chocolates."
    }
]

app.get("/posts",(req,res) => {
    res.render("home.ejs",{posts});
});

app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/posts",(req,res)=> {
    const {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
})


app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});