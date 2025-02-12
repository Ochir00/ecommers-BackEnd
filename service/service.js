const users = require("../Database/UsersData")
const editprofile = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const user = users.find((user)=> user._id==id)
    user.name = name ;
    res.send(user)
  };


  const createUsers = (req, res) => {
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
  module.exports = { createUsers, editprofile };