const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
console.log(process.argv);

if (!address) {
 console.log('Please provide an address');
} else {
 geocode(address, (error, data) => {
  if (error) {
   return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
   if (error) {
    return console.log(error);
   }
   console.log(data.location);
   console.log(forecastData);
  });
 });
}
// forecast(37.8267, -122.4233, (error, data) => {

// basic async function and how it works:
// function call to stack to node api to callstack queue

/*
console.log('Starting');
setTimeout(() => {
 console.log('2 Seconds Timer');
}, 2000);
setTimeout(() => {
 c{onsole.log('0 Seconds Timer');
}, 0);
console.log('Stopping');
*/
