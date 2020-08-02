const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    url = 'http://api.weatherstack.com/current?access_key=13dd5fcaafef495301e7b2725917e974&query=' +latitude + ',' + longitude + '&units=f';
    request({url, json: true}, (err, {body}) => {
        // console.log(res.statusCode)
        if (err) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback({error: 'unable to find location'}, undefined);
        } else {
             data = {
                 name: body.location.name,
                 country: body.location.country,
                 region: body.location.region,
                 temperature: body.current.temperature,
                 precipitation: body.current.precip,
                 feelsLike: body.current.feelslike,
    }
callback(undefined, data);
}})};

module.exports = getWeather;