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
const mongoose = require('mongoose');
const Hospital = require('./models/Hospital'); // adjust path as needed

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const hospitals = await Hospital.find({ name: { $regex: query, $options: 'i' } });
    res.render('searchResults', { query, hospitals });
  } catch (err) {
    res.status(500).send('Something went wrong.');
  }
});


// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get('/add-hospital', (req, res) => {
  res.render('addHospital'); // You'll create addHospital.ejs
});

app.post('/add-hospital', async (req, res) => {
  const { name, address, contact, description, image } = req.body;
  try {
    const newHospital = new Hospital({ name, address, contact, description, image });
    await newHospital.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding hospital");
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
