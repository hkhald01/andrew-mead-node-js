const http = require('http');

const access_key = '80c7a460080eca984383d81085484b76';
const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=40,-75&units=f`;

const request = http.request(url, (response) => {
 let data = '';
 response.on('data', (chunk) => {
  data += chunk;
  console.log(chunk);
 });
 response.on('end', () => {
  const body = JSON.parse(data);
  console.log(body);
 });
});

request.on('error', (err) => {
 console.log(err);
});
request.end();
