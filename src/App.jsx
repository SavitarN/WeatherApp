import { useEffect, useState } from "react";
import Hero from "./section/Hero";
import NavSearch from "./section/NavSearch";
import { getCurrentWeather } from "../src/api/weather";
function App() {
  const [city, setCity] = useState("Kathmandu");

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const handleSearch = async () => {
    if (!city) return;

    try {
      const data = await getCurrentWeather(city);
      setWeather(data);
      setForecast(data?.forecast?.forecastday[0]?.hour);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <main className="min-h-screen bg-blue-950 relative">
      <NavSearch city={city} setCity={setCity} handleSearch={handleSearch} />
      {weather && <Hero weather={weather} forecast={forecast} />}
    </main>
  );
}

export default App;
