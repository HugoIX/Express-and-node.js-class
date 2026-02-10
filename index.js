const express = require('express');
const mongoose = require('mongoose');
const { stringify } = require('node:querystring');
require('dotenv').config();
const app = express();
const PORT = 3000;

app.use(express.json());

const mongoURL = process.env.MONGO_URL;



mongoose.connect(mongoURL)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((err) => {
        console.error("Error Detallado:");
        console.error(err.message); 
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String
});

const User = mongoose.model('users', userSchema);

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch(error) {
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});