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


app.use("/cinemas",cinemaRouter);
app.use("/bookings",bookingRouter);
app.use("/slots",slotRouter);
app.use("/screens",screenRouter);
app.use("/users",userRouter);




console.log('Server is Online');
app.listen(5000);