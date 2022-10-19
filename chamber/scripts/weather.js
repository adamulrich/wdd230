
// location and api and url constants
const lat = 47.30;
const lon = -122.22;
const apikey = "9880917462831086d4f7d0427eebff95";
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;


// Loads weather data from location above using the api key and OpenWeatherMap api.
async function loadWeatherData () {

    const response = await fetch(weatherUrl);

    if (response.ok) {
        const weatherData = await response.json();
    
        // current temp
        const currentTemp = Math.round(weatherData.list[0].main.temp);
        document.getElementById('temperature').innerText = String(currentTemp)

        // wind speed
        const currentWindSpeed = weatherData.list[0].wind.speed;
        document.getElementById('wind_speed').innerText = String(currentTemp)

        // description
        const currentDescription = weatherData.list[0].weather[0].description;
        document.getElementById('forecast').innerText = String(currentDescription)

        // wind chill
        let currentWindChill = "";
        if (currentTemp <= 50 & currentWindSpeed > 3) {
            currentWindChill = Math.round(35.74 + (0.6215 * currentTemp ) - 
                            (35.75 * (currentWindSpeed ** 0.16)) + 
                            (0.4275 * currentTemp * (currentWindSpeed ** 0.16) )).toString() + "°F";
        }
        else {
            currentWindChill = "N/A"
        }
                           
        document.getElementById('wind_chill').innerText = String(currentWindChill)

        // icon
        const iconId = weatherData.list[0].weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
        document.getElementById('weather_icon').src = iconUrl
        
    }

}

loadWeatherData()

