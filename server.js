const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
//  UsersDATA
const users = require("./Database/UsersData");
// service
const { editprofile, createUsers } = require("./service/service");


// USERS REGISTER
app.post("/users/register", createUsers);

app.get("/users/register", (req, res) => {
  res.send(users);
});

// LOGIN USERS
app.post("/users/login", (req, res) => {
  const { name, password } = req.body;
  let user = users.find((user) => name === user.name);

  if (!user) {
    return res.send("Burtgel oldsongu");
  }
  if (user.password === password) {
    return res.send(`Success ${user._id - 1}`);
  }
  res.send("password buruu bn");
});

// get profile
app.get("/users/profile/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => id == user._id);
  res.send(user);
});
app.put("/users/profile/:id", editprofile);

app.listen(4000, () => {
  console.log(`App is running on ${4000}`);
});

// echo "# ecommers-BackEnd" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Ochir00/ecommers-BackEnd.git
// git push -u origin main
