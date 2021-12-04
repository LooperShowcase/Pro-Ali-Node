const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);
function creatUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}

creatUser(1, "Eli", "England is My city ");
creatUser(2, "Ali", "I am the city");

console.log(users);
