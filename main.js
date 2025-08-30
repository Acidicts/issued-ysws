const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('src/pages'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/pages/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/src/pages/about.html');
});

app.get('/faq', (req, res) => {
    res.sendFile(__dirname + '/src/pages/faq.html');
});

app.get('/start', (req, res) => {
    res.sendFile(__dirname + '/src/pages/start.html');
});

app.get('/favicon', (req, res) => {
    res.sendFile(__dirname + '/src/assets/favicon.png');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;