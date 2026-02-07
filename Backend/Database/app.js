const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

let userInfo = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "learn",
  password:"Nitesh7343"
});
let q = `SHOW TABLES`;
try{
  connection.query(q,(err,result)=> {
    if(err) throw err;
    console.log(result)
  });
} catch(err) {
  console.log(err);
}

connection.end();