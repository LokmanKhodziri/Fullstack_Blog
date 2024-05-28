const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5050;

const salt = bcrypt.genSaltSync(10);
const secret = 'asdjf134as';

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.nqggchq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.status(200).json(userDoc);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Registration failed' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id, }, secret, {}, (error, token) => {
            if (error) throw error;
            res.cookie('token', token).json('ok');
        });
    } else {
        res.status(400).json('Wrong username or password');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

app.listen(port);