async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "341ded7867072402f014508c3de44bc0";

    if (city === "") {
        document.getElementById("weather-result").innerHTML =
            "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == "404") {
            document.getElementById("weather-result").innerHTML = "City not found!";
            return;
        }

        document.getElementById("weather-result").innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p><b>Temperature:</b> ${data.main.temp}°C</p>
            <p><b>Condition:</b> ${data.weather[0].description}</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
            <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
        `;
    }
    catch (error) {
        document.getElementById("weather-result").innerHTML =
            "❌ Error: Could not load weather. Please run with LIVE SERVER.";
    }
}
