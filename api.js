const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const bodyParser = require('body-parser');
const session = require('express-session');

const { sequelize } = require('./models');
const {logger} = require('./loggers');

const mainRoute = require('./routes');
const authRoute = require('./routes/auth');

const {passport} = require('./models/mongoose/user');
const connectEnsureLogin = require('connect-ensure-login');

const app = express();
const port = 5050;


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.listen(port, async() => {
  console.log("Listening to port");
  await sequelize.authenticate();
  logger.info("Database Synced");
});

app.use(session({secret: 'test secret', resave: false, saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', mainRoute);
app.use('/auth', connectEnsureLogin.ensureLoggedIn(), authRoute);