const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5050;

const salt = bcrypt.genSaltSync(10);
const secret = 'asdjf134as';

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('Wrong username or password');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.json(decoded);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'File upload failed' });
        }

        const { originalname, path: tempPath } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newFileName = `${req.file.filename}.${ext}`;
        const newPath = path.join(__dirname, 'uploads', newFileName);
        const relativePath = `/uploads/${newFileName}`;

        fs.renameSync(tempPath, newPath);

        //console.log(`File saved at: ${relativePath}`); // Logging for debugging

        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, secret, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            const { title, summary, content } = req.body;
            try {
                const postDoc = await Post.create({
                    title,
                    summary,
                    content,
                    cover: relativePath, // Store the relative path in the database
                    author: decoded.id,
                });
                res.json(postDoc);
            } catch (e) {
                console.error(e);
                res.status(500).json({ message: 'Post creation failed' });
            }
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
});

app.get('/post', async (req, res) => {
    const posts = await Post.find()
        .populate('author', ['username'])
        .sort({ createdAt: 'desc' })
        .limit(10);
    res.json(posts);
});

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
