const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views', 'home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('views', 'register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views', 'login.html'));
})

const port = process.env.port || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));