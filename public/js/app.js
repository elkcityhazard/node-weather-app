console.log('client side javascript message is loaded')
const address = '!'
const url = 'http://localhost:3000/weather?address=!';

const weatherForm = document.querySelector('form');
let input = document.querySelector('input');
const displayWeather = document.querySelector('.display-weather');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    displayWeather.innerHTML = '';
    const location = input.value;
    if (location === '') {
        // displayWeather.innerHTML += `<li> Must enter a valid Address</li>`;

    }
    console.log(location)
    displayWeather.innerHTML = `Searching For ${input.value}...`;
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then((data) => {
        if (data.error) {
            displayWeather.innerHTML += `<li> ${data.error}</li>`;
            return console.log(data.error);
        }
        console.log(data);
        displayWeather.innerHTML = '';
        const entries = Object.entries(data);
        console.log(entries);

        for (const [data, obj] of entries) {
            displayWeather.innerHTML += `<li> ${data} : ${obj} </li>`;
          }
        })
})
input.value = '';
})