const express = require('express');
const app = express();
const path = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MovieApp");

let cors = require('cors');
app.use(cors());
app.use(express.json());


// -------- Adding Routings / Controllers
const bookingRouter= require('./routes/bookings');
const cinemaRouter= require('./routes/cinemas');
const slotRouter= require('./routes/slots');
const screenRouter= require('./routes/screens');
const userRouter= require('./routes/users');


app.use("/cinema",cinemaRouter);
app.use("/booking",bookingRouters);
app.use("/slot",slots);
app.use("/screen",screens);
app.use("/user",users);




console.log('Server is Online');
app.listen(5000);