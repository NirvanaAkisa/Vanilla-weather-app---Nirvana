function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windEelement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windEelement.innerHTML - Math.round(response.data.wind.speed);
}

let apiKey = "1266ad07b66517497b1acf79ea5a6a64";
let units = "metric"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cape Town&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);