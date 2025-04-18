import { useEffect, useState } from "react";
import Hero from "./section/Hero";
import NavSearch from "./section/NavSearch";
import { getCurrentWeather } from "../src/api/weather";
function App() {
  const [city, setCity] = useState("Kathmandu");

  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city) return;

    try {
      const data = await getCurrentWeather(city);
      setWeather(data);
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
      <Hero weather={weather} />
    </main>
  );
}

export default App;
