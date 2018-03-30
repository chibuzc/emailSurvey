const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')

require('./models/user')
require('./services/passport')


const keys = require('./config/keys')
const cookieSession = require("cookie-session")

const app = express();

app.use(bodyParser.json())
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);

if(process.env.NODE_ENV === 'production'){
//Express will serve up production assets
//like main.css or main.js files
app.use(express.static('client/build'));

//Express will serve up index.html file
//If it doesn't recognise the route
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

mongoose.connect(keys.mongoURL)


const PORT = process.env.PORT
app.listen(PORT || 5000)