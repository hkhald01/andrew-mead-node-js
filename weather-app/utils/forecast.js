const request = require('request');

const forecast = (latitude, longitude, callback) => {
 const access_key = '80c7a460080eca984383d81085484b76';
 const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude},${longitude}&units=f`;
 request.get({ url: url, json: true }, (error, response) => {
  if (error) {
   callback('Unable to connect to weather service', undefined);
  } else if (response.body.error) {
   callback('Unable to find location', undefined);
  } else {
   callback(
    undefined,
    `${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature}.There is a ${response.body.current.precip}% chance of rain`
   );
  }
 });
};

module.exports = forecast;
