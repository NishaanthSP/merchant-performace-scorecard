const {logger} = require('../loggers');
const {UserDetails} = require('../models/mongoose/user');


const auth_success = (req,res)=>res.json({"msg":"success"});
// Still in work
const remove_user = (req, res) =>{
  UserDetails.deleteOne({username: req.body.username}, (err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  })
}

const add_user = (req, res) => {
  try {
  username = req.body.username;
  password = req.body.password;
  }catch(err) {
    res.sendStatus(500);
  }
  UserDetails.register({username: username, active: false}, password);
  res.sendStatus(200);
}

module.exports = {auth_success, remove_user, add_user};