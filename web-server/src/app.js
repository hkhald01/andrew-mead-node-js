const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
 res.render('index', { title: 'Weather App', name: 'Andrew Mead' });
});

app.get('/weather', (req, res) => {
 res.send({ location: 'Detroit', forecast: 53 });
});

app.listen(3000, () => {
 console.log('server is up on port 3000');
});
