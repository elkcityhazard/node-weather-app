const request = require('request');

const geoCode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&autocomplete=false&language=en&access_token=pk.eyJ1IjoiZWxrY2l0eWhhemFyZCIsImEiOiJja2Q5NWI4c3Uwc2o4MnlsdjZ4dWZka3JzIn0.E9pirMPkPyH_tB-0w0XtJg';

    request({url, json: true }, (err, {body}) => { //   {body} was derived from Data object}
        if (err) {
            callback('unable to connect to location services')
        } else if (body.features.length === 0) {
            callback({
                error: "Unable to find location Try another search.",
            });
            return;
        } else if (body.message) {
            callback(body.message,statusCode);
            return;
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0];
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    });
}

module.exports = geoCode;