const express = require('express');
const app = express();
const path = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MovieApp");

let cors = require('cors');
app.use(cors());
app.use(express.json());


// -------- Adding Routings / Controllers
const bookings= require('./Routes/bookings');
//const users= require('./Controllers/userController');
const cinemas= require('./Routes/cinemas');


app.use("/cinema",cinemas);

app.use("/booking",bookings);



console.log('Server is Online');
app.listen(5000);