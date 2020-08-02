const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const geoCode = require('./utils/geocode');
const getWeather = require('./utils/getweather');
const views = path.join(__dirname, '../templates/views');
const partials = path.join(__dirname, '../templates/partials');
const errorController = require('../controllers/errorController');
// app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'hbs');

//  Changed views folder to templates => view location
app.set('views', views);
hbs.registerPartials(partials);
app.use('/public', express.static(path.join(__dirname, '../public')))

//app.com/
app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Welcome To The Index',
        name: 'Andrew McCall',
        path: '/',
    })
});

//  app.com/about
app.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'About Page',
        imgCaption: 'Andrew McCall Wins Big',
        name: 'Andrew McCall',
        path: '/about',
    })
})
//  app.com/help

app.get('/help', (req, res, next) => {
    res.render('help', {
        title: 'help',
        msg: 'help area',
        name: 'Andrew McCall',
        path: '/help',
    })
})

// app.com/weather

app.get('/weather', (req, res, next) => {
    if (!req.query.address ) {
        return res.send({
            error: 'please enter a valid address',
        })
    }
    geoCode(req.query.address, (err, {latitude, longitude, location} = {}) => {
        if(err) {
            return res.send(err);
        }   
            getWeather(latitude, longitude, (err, data) => {
                if (err) {
                    return res.send(error)
                }
                    res.send(data);
            });
        
    });
})

// app.get('/products', (req, res, next) => {
//     if (!req.query.search) {
//         return res.send({
//             error: 'You must provide a search term',
//         })
//     }
//     console.log(req.query);
//     res.send({
//         products: [],
//     })
// })

app.get('/help/*', errorController.helpError);


app.listen(3000, () => {
    console.log('server listening on 3000')
});
