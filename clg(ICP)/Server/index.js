const http = require('http');
// const server = http.createServer(()=> {

// });

// server.listen(8000,'localhost',(err)=> {
//     if(err) console.log(err);
//     console.log("server listening")
// })

// http.createServer((req,response)=> {
// response.end("Hello server");
// }).listen(5000,'localhost',(err)=> {
//     if(err) throw err;
//     console.log("server listening");
// });

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running fine 🚀");
}).listen(5000, "0.0.0.0", () => {
    console.log("Server running");
});