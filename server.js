const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);

//Creat users
function creatUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}

function readUser(id) {
  return users[id];
}

creatUser(0, "Eli", "England is My city ");
creatUser(1, "Ali", "I am city");

console.log(users);

function deleteUser(id) {
  delete users[id];
}
function updateUser(id, name, city) {
  if (users[id] == undefined) {
    console.error("da berson isnt here lolz");
  } else {
    users[id] = {
      name: name,
      city: city,
    };
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//save to data base and update it
let dataToString = JSON.stringify(users);
fs.writeFileSync("db.json", dataToString);
