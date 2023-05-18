const weatherEl = document.querySelector('#temperature');
let cityEl = document.querySelector('#city');
let apiKey = 'f4eeb4643efd48dba87173420230905'
let inputEl = document.querySelector('#discoverCity')
let submitBtn = document.querySelector('#btnSubmit');

cityEl.innerHTML = `Weather in <span>${localStorage.getItem('city')}</span>`

inputEl.addEventListener('input', () => {
    localStorage.setItem('city', inputEl.value);

})

//submitBtn.addEventListener('input', () => {
  //  let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputEl.value}&aqi=no`
    //let xhr = new XMLHttpRequest();
    //xhr.open('GET', url);
    //xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.send();
    //xhr.onload = () => {
      //  let response = JSON.parse(xhr.response);
        //console.log(response);
    //};
//})

let getCity = localStorage.getItem('city');
if (city.length > 0) {
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputEl.value}&aqi=no`
    axios.get(url)
        .then((res) =>{
            return res.json
        })
        .then((data) => {
            console.log(data);
        })
}    

else {
        alert('No city found')
}

