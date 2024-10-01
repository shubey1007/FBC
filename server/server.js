const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
}).catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to Fresh Baked Cafe API');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});