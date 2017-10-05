const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport')
require('./models/user')
require('./services/passport')


const keys = require('./config/keys')
const cookieSession = require("cookie-session")

const app = express();

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

mongoose.connect(keys.mongoURL)


const PORT = process.env.PORT
app.listen(PORT || 5000)