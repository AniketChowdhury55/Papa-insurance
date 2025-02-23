const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();


// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log('Server running on port 3000'));
