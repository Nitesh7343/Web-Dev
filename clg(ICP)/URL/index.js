// const http = require('http');
// const url = require('url');


// http.createServer((req,res) => {
//     res.end("Server running");
//     console.log(req.url);
// }).listen(3000,'localhost',(err) => {
//     if(err) throw err;
// })

// let address = "https://www.youtube.com/results?search_query=hello+world";

// const myURL = url.parse(address,true);

// console.log(myURL);

// console.log(myURL.protocol);

// console.log(myURL.query.search_query);


const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res) => {

    let date = new Date();
    console.lpog
    if(req.url == '/favicon'){
        res.status(204);
        res.end();
        return;
    }
    fs.appendFile("log.txt",`${date} ${req.url} : New Request received`, (err) => {
        if(err) console.log(err);
        console.log("Log generated");
    });

    res.end();

}).listen(8000,'localhost',(err) => {
    if(err) console.log(err);
    console.log("server started at http://localhost:8000/");
})

