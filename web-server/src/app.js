const path = require('path');
const express = require('express');


const app = express();

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// Setup handlebars engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
 res.render('index', { title: 'Weather App', name: 'Andrew Mead' });
});

app.get('/about', (req, res) => {
 res.render('about', { title: 'about Me ', name: 'Andrew Mead' });
});

app.get('/help', (req, res) => {
 res.render('help', { title: 'Help', text: 'Page help' });
});
app.get('/weather', (req, res) => {
 res.send({ location: 'Detroit', forecast: 53 });
});

app.listen(3000, () => {
 console.log('server is up on port 3000');
});
