async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    try {
      const response = await fetch(`/weather/${cityName}`);
      const weatherData = await response.json();
  
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp} &#8451;</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  