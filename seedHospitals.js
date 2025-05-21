// seedHospitals.js

const mongoose = require('mongoose');

// Adjust if needed
const mongoURI = 'mongodb://localhost:27017/yourdbname';

// Hospital model
const hospitalSchema = new mongoose.Schema({
  name: String
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

const hospitals = [
  { name: "Apollo Hospital" },
  { name: "Fortis Healthcare" },
  { name: "AIIMS Delhi" },
  { name: "Max Super Specialty Hospital" },
  { name: "Medanta The Medicity" },
  { name: "BLK Super Specialty Hospital" },
  { name: "Narayana Health" },
  { name: "Kokilaben Dhirubhai Ambani Hospital" },
  { name: "Manipal Hospital" },
  { name: "Lilavati Hospital" },
  { name: "Tata Memorial Hospital" },
  { name: "Care Hospitals" },
  { name: "Columbia Asia Hospital" },
  { name: "Ruby Hall Clinic" },
  { name: "Cloudnine Hospital" },
  { name: "Global Hospitals" },
  { name: "HCG Cancer Centre" },
  { name: "Aster CMI Hospital" },
  { name: "Sir Ganga Ram Hospital" },
  { name: "Jehangir Hospital" },
  { name: "Holy Family Hospital" },
  { name: "SevenHills Hospital" },
  { name: "Sankara Nethralaya" },
  { name: "Dr. B.L. Kapur Memorial Hospital" },
  { name: "Nanavati Hospital" },
  { name: "Wockhardt Hospital" },
  { name: "Jaslok Hospital" },
  { name: "Bombay Hospital" },
  { name: "Christian Medical College" },
  { name: "Sunshine Hospital" },
  { name: "Amrita Institute of Medical Sciences" },
  { name: "Vasan Eye Care" },
  { name: "Pristyn Care" },
  { name: "Rainbow Children’s Hospital" },
  { name: "Vikram Hospital" },
  { name: "Sparsh Hospital" },
  { name: "Sakra World Hospital" },
  { name: "Medicover Hospitals" },
  { name: "Star Hospitals" },
  { name: "Continental Hospital" },
  { name: "Paras Hospital" },
  { name: "Gleneagles Global Hospitals" },
  { name: "Shalby Hospital" },
  { name: "Sterling Hospital" },
  { name: "Aditya Birla Memorial Hospital" },
  { name: "Breach Candy Hospital" },
  { name: "Saifee Hospital" },
  { name: "King Edward Memorial Hospital" },
  { name: "Rajiv Gandhi Cancer Institute" },
  { name: "ESI Hospital" },
  { name: "Sion Hospital" },
  { name: "Hinduja Hospital" },
  { name: "Lokmanya Hospital" },
  { name: "St. Stephen’s Hospital" },
  { name: "Sundaram Medical Foundation" },
  { name: "Anand Hospital" },
  { name: "Ganga Hospital" },
  { name: "NIMHANS" },
  { name: "CMRI Hospital" },
  { name: "PGIMER Chandigarh" },
  { name: "KIMS Hospital" },
  { name: "Moolchand Hospital" },
  { name: "Kaya Kalp Hospital" },
  { name: "Sahara Hospital" },
  { name: "Bhagwan Mahavir Hospital" },
  { name: "Navodaya Hospital" },
  { name: "Metro Hospital" },
  { name: "Balaji Hospital" },
  { name: "Orion Hospital" },
  { name: "Sanjeevani Hospital" },
  { name: "Unity Hospital" },
  { name: "Remedy Hospital" },
  { name: "Curewell Hospital" },
  { name: "LifeCare Hospital" },
  { name: "Hope Hospital" },
  { name: "Trinity Hospital" },
  { name: "Sunrise Hospital" },
  { name: "Wellness Hospital" },
  { name: "Om Sai Hospital" },
  { name: "Grace Hospital" },
  { name: "Pioneer Hospital" },
  { name: "Shanti Hospital" },
  { name: "Arogya Hospital" },
  { name: "Janseva Hospital" },
  { name: "Aastha Hospital" },
  { name: "Noble Hospital" },
  { name: "Ayush Hospital" },
  { name: "City Hospital" },
  { name: "Divine Hospital" },
  { name: "Apollo Spectra" },
  { name: "Ujala Cygnus Hospital" },
  { name: "Green City Hospital" },
  { name: "Shree Hospital" },
  { name: "Raj Hospital" },
  { name: "Neelkanth Hospital" },
  { name: "Shree Krishna Hospital" },
  { name: "Ayurveda Wellness Hospital" },
  { name: "Sarvodaya Hospital" },
  { name: "Nidan Hospital" },
  { name: "Shraddha Hospital" },
  { name: "Avanti Hospital" },
  { name: "Manas Hospital" }
];

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Hospital.deleteMany({});
    await Hospital.insertMany(hospitals);
    console.log('✅ Successfully seeded 100 hospital names!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Error seeding hospitals:', err);
    mongoose.disconnect();
  });
