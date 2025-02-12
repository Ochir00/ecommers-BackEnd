const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
//  UsersDATA
const users = require("./Database/UsersData");
// service

const CreateUsers = (req, res) => {
  let NewUser = req.body;
  //backend-ees ogoh data
  const lastuser = users[users.length - 1];
  NewUser._id = parseFloat(lastuser._id) + 1;
  NewUser.role = "custon";
  NewUser.createAt = new Date();
  NewUser.updateAt = new Date();
  users.push(NewUser);
  res.send("User successfully added");
};
const editprofile = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const user = users.find((user)=> user._id==id)
    user = name ;
  };
  



// USERS REGISTER
app.post("/users/register", CreateUsers );
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
    return res.send(`Success ${user._id-1}`);
  }
  res.send("password buruu bn");
});

// get profile
app.get("/users/profile/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user)=> id == user._id )
    res.send(user);
});
app.put("/users/profile/:id", editprofile )

app.listen(4000, () => {
  console.log(`App is running on ${4000}`);
});
