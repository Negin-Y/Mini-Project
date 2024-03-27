const express = require('express');
const path = require('path');
const app = express();
const port = 3001; 

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import JSON data
const nespressoData = require('./data/nespressoCoffees_data.json');

// Route to send JSON data
app.get('/api/products', (req, res) => {
    res.json(nespressoData);
});

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve other HTML pages
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
