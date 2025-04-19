import axios from 'axios';

const API_KEY = '3338e4539301409c869120734251804';
const BASE_URL = 'http://api.weatherapi.com/v1/';

export const getCurrentWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
                days: 1,
                aqi: 'no'
            }
        })

        return response.data;
    } catch (error) {
        console.log('error fetching weather', error);
        throw error;
    }
};