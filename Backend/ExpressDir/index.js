const express = require("express");
const app = express();

// console.dir(app);

let port = 4000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
