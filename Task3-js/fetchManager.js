const apiKey = '3608b463d5f05cab5280c3d7c0d3025d';
const openWeatherUri = 'https://api.openweathermap.org/geo/1.0/direct';
const openMeteUri = 'https://api.open-meteo.com/v1/forecast';

class FetchManager {

    openWeatherMap(cityName, limit = 1, method = 'GET') {
        return fetch(`${openWeatherUri}?q=${cityName}&limit=${limit}&appid=${apiKey}`, {method})
    }

    openMeteorology(lat, lon, method = 'GET') {
        return fetch(`${openMeteUri}?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean&timezone=auto`, {method})
    }
}

const fetchManager = new FetchManager();
export default fetchManager;