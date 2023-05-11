/*let xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.monobank.ua/bank/currency") // open request
xhr.setRequestHeader("Content-Type", "application/json") // set headers 
xhr.send() // send request
xhr.onload = () => { 
    let response = xhr.response
    response = JSON.parse(response)
    console.log(response) // print response
}*/
const weatherEl = document.querySelector('#temperature');
let cityEl = document.querySelector('#city');
let apiKey = 'f4eeb4643efd48dba87173420230905'
let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Poltava&aqi=no`

cityEl.innerHTML = `Weather in <span>Poltawa</span>`
// 2 params - login and password 
// http://example.com/signin?login=admin&password=123

let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
xhr.onload = () => {
    let weather = xhr.response
    weather = JSON.parse(weather)
    console.log(weather) // print weather
    weatherEl.innerHTML = `Temp now: ${weather.current.temp_c}°C`
};