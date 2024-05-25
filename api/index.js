const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const port = 5050;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.nqggchq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        const userDoc = await User.create({ username, password });
        res.status(200).json(userDoc);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Registration failed' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
