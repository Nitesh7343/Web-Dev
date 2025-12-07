const express = require("express");
const app = express();

const { v4: uuidv4 } = require("uuid");

const port = 3000;

const path = require("path");

app.use(express.urlencoded({ extended:true }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id:uuidv4(),
        username:"bunnny",
        content:"bunny codes everything."
    },
    {
        id:uuidv4(),
        username:"dora",
        content:"dora eats momos."
    },
    {
        id:uuidv4(),
        username:"panda",
        content:"panda loves sleeping."
    },
    {
        id:uuidv4(),
        username:"kitty",
        content:"kitty meows all day."
    },
    {
        id:uuidv4(),
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
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res) => {
    const {id} = req.params;
    let post = posts.find((p) => p.id === id);

    if (!post) {
        return res.send("Post not found!");
    }

    res.render("show.ejs",{post});
});




app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});