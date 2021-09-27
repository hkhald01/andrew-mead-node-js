const request = require('request');

const weatherstack_access_key = '80c7a460080eca984383d81085484b76';
const mapbox_access_token =
 'pk.eyJ1IjoiaGtoYWxkaSIsImEiOiJja3R6NWdpdDgwZWRjMnVwZ2JweWVscjEwIn0.EHBk7WXR2vnQMs4VvuyROA';

const search_text = 'los angelos';
let weather_query = '';
const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=${mapbox_access_token}`;
const weatherstack_url = `http://api.weatherstack.com/current?access_key=${weatherstack_access_key}&query=34.063249,-118.358512&units=f`;

request({ url: mapbox_url, json: true }, (error, response) => {
 if (error) {
  console.log('unable to connect to mapbox service!');
 } else if (response.body.features.length === 0) {
  console.log('unable to find location!');
 } else {
  weather_query = `${response.body.features[0].center[1]},${response.body.features[0].center[0]}`;
  console.log('weather_query: ' + weather_query);
 }
});

request({ url: weatherstack_url, json: true }, (error, response) => {
 if (error) {
  console.log('unable to connct to weather service');
 } else if (response.body.error) {
  console.log('unable to find location');
 } else {
  const data = response.body.current;
  console.log(
   `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out, it feels like ${data.feelslike} degrees out. There is a  ${data.precip}% chance of rain`
  );
 }
});

// basic async function and how it works:
// function call to stack to node aoi to callstack queue

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
