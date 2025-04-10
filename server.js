const URL = require('./models/URL');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');


const urlRoutes = require('./routes/urlRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDB Connected Successffully'));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error: ', err));



app.use('/api/auth', authRoutes);

app.use('/api/url', urlRoutes);
app.get('/u/:alias', async (req, res) => {
    const url = await URL.findOneAndUpdate(
        { shortId: req.params.alias },
        { $inc: { clicks: 1 } }, // Increment clicks
        { new: true }
    );
    if (!url) return res.status(404).json({ msg: 'Not found' });
    res.redirect(url.originalUrl);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));