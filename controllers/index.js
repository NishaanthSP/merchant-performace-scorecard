const {logger} = require('../loggers');
const passport = require('passport');

const get_healthz = (req, res) => {
  return res.status(200).json({});
}

const login = (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.json({"User not found ": info});

    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.redirect('/auth/');
    });

  })(req, res, next);
}

const get_login = (req,res) => {
  return res.json({"ERR": "You are not authenticated.","Solution": "Authenticate in POST /login with username and password"});
}

module.exports = {get_healthz, get_login, login}














/*
const initializePassport = require('../config/passport-config');
initializePassport(passport);

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



//require('crypto').randomBytes(64).toString('hex')

const handle_login = ()=>{return {}}

handle_register = async (req, res) => {
  const {username, password, email} = req.body;
  try {
    console.log("Came in 1");
    let xyz;
    const hashedPassword = await bcrypt.hash(password, 10);
    fs.readFile("./models/users.json", 'utf-8', (err, jsonString) => {
      console.log("Came in 2");
      xyz = JSON.parse(jsonString);
      if (err) {
        console.log("File read failed:", err);
        return res.status(401);
      }
      else{
        console.log(xyz);
        xyz.push({username, hashedPassword, email});
    console.log("Created");
    fs.writeFile("./models/users.json", JSON.stringify(xyz), err => {
      console.log("Came in")
      if(err) {
        console.log(err);
      }
      else {
        return res.json(xyz);
      }
    });
      }
    });
    
    
    return res.status(200).json(JSON.parse(jsonString));
  }
  catch {
    return res.status(400);
  }
}

const handle_login2 = (req, res) => {
  const username = req.body.username
  const user = {name: username}
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken: accessToken})
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user
    next()
  })
} */