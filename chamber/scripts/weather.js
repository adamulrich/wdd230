
// location and api and url constants
const lat = 47.350339;
const lon = -122.176031;

// Loads weather data from location above using OpenWeatherMap api.
async function loadWeatherData(weatherUrl) {
    
    const response = await fetch(weatherUrl);

    if (response.ok) {
        const weatherData = await response.json();
    
        // current temp
        const currentTemp = Math.round(weatherData.main.temp * 10) / 10;
        document.getElementById('temperature').innerText = String(currentTemp);

        // wind speed
        const currentWindSpeed = Math.round(weatherData.wind.speed * 10) / 10 ;
        document.getElementById('wind_speed').innerText = String(currentWindSpeed);

        // description
        const currentDescription = weatherData.weather[0].description;
        document.getElementById('forecast').innerText = String(currentDescription);

        // wind chill
        let currentWindChill = "";
        if (currentTemp <= 50 & currentWindSpeed > 3) {
            currentWindChill = Math.round(35.74 + (0.6215 * currentTemp ) - 
                            (35.75 * (currentWindSpeed ** 0.16)) + 
                            (0.4275 * currentTemp * (currentWindSpeed ** 0.16) )).toString() + "°F";
        }
        else {
            currentWindChill = "N/A";
        }
                           
        document.getElementById('wind_chill').innerText = String(currentWindChill);

        // icon
        const iconId = weatherData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
        document.getElementById('weather_icon').src = iconUrl;
        document.getElementById('weather_icon').alt = weatherData.weather[0].description;
    }
}

async function loadToken() {
    let tokenURL = "https://2riyw4y7f7h64hs3im5q6g3v340iylhl.lambda-url.us-west-2.on.aws/?token=openweatherapi_token";    
    const response = await fetch(tokenURL);

    if (response.ok) {
        const token = await response.json();
        const apikey = token;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;
        console.log(weatherUrl)

        loadWeatherData(weatherUrl);
    }
}

loadToken();
