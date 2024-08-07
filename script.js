document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
      getWeather(city);
    } else {
      alert('Please enter a city');
    }
  });
  
  async function getWeather(city) {
    const apiKey = 'fcc8de7015bbb202209bbf0261babf4c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
      } else {
        alert('City not found');
      }
    } catch (error) {
      alert('Error fetching data');
    }
  }
  