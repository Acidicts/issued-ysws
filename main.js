const express = require('express');
const fs = require('fs');

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

if (fs.existsSync(__dirname + '/src/pages/start.html')) {
    app.get('/start', (req, res) => {
        res.sendFile(__dirname + '/src/pages/start.html');
    });
}

app.get('/editor', (req, res) => {
    res.sendFile(__dirname + '/src/pages/editor.html');
});

app.get('/favicon', (req, res) => {
    res.sendFile(__dirname + '/src/assets/favicon.png');
});

app.get('/404', (req, res) => {
    res.sendFile(__dirname + '/src/pages/404.html');
});

app.use((req, res) => {
    res.redirect('/404?error='+req.url);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;