
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDB Connected Successffully'));


mongoose.connect("mongodb+srv://r555sid:RJjgkHiuz7JuoClP@cluster0.icw318j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error: ', err));



app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));