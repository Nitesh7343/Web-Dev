const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})

app.get("/",(req,res) => {
    console.log("Request Received on root");
    res.send("Receiver on route root");
});
app.get("/apple",(req,res) => {
    console.log("Request Received on apple");
    res.send("Receiver on route apple");
});
app.get("/orange",(req,res) => {
    console.log("Request Received on orange");
    res.send("Receiver on route orange");
});

app.use((req,res) => {
    console.log("Wrong path");
    res.send("Wrong path");
})