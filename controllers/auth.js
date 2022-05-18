const {logger} = require('../loggers');
const {UserDetail} = require('../models/mongoose/user');


const auth_success = (req,res)=>res.json({"msg":"success"});
// Still in work
// const remove_user = (req, res) =>{
//   console.log("Eteres");
//   UserDetail.remove({"username":req.body.username}, (err) => {
//     if (err) {
//       return res.sendStatus(500);
//     }
//     return res.sendStatus(200);
//   })

// }
module.exports = {auth_success, remove_user};