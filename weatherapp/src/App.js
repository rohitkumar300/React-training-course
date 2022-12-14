import React, { useState } from "react";
import { WeatherWidget } from "./components/WeatherWidget";
import './App.css'

//This display expects 4 props name,country,temperature,pressure
// {
//   "coord": {
//     "lon": 77.2167,
//     "lat": 28.6667
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 31.08,
//     "feels_like": 30.12,
//     "temp_min": 31.08,
//     "temp_max": 31.08,
//     "pressure": 1010,
//     "humidity": 33,
//     "sea_level": 1010,
//     "grnd_level": 985
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 4.83,
//     "deg": 338,
//     "gust": 5.82
//   },
//   "clouds": {
//     "all": 0
//   },
//   "dt": 1665660494,
//   "sys": {
//     "country": "IN",
//     "sunrise": 1665622221,
//     "sunset": 1665663854
//   },
//   "timezone": 19800,
//   "id": 1273294,
//   "name": "Delhi",
//   "cod": 200
// }

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [search, Setsearch] = useState("");
  const [city, SetCity] = useState("");
  const [country, SetCountry] = useState("");
  const [temperature, SetTemperature] = useState(0);
  const [pressure, SetPressure] = useState(0);
  const [humidity, SetHumidity] = useState(0);
  const [longitude, SetLongitude] = useState(0);
  const [latitude, SetLatitude] = useState(0);
  const [windspeed,SetWindspeed] = useState(0);
  const [description, SetDescription] = useState("");
  const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63d6d88996e578187824190c05551ea7`;
  const fetchData = async () => {
    try {
      const response = await fetch(API_LINK);
      const json = await response.json();
      SetCity(json.name);
      SetLatitude(json.coord.lat)
      SetLongitude(json.coord.lon)
      SetCountry(json.sys.country)
      SetTemperature(json.main.temp);
      SetPressure(json.main.pressure)
      SetHumidity(json.main.humidity);
      SetWindspeed(json.wind.speed);
      SetDescription(json.weather[0].description);

    } catch (error) {
      console.log("error", error);

    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    Setsearch(e.target.value);
  };

  return (



    <div className="box">
    <div className="fields">
    <div className="searchbox">

      <input type="text" autocomplete="off" name="search" onChange={handleChange} value={search} />
    </div>
    </div>
    <div>

      <button className="search-button" type="btn" onClick={() => fetchData()}>
        Search
      </button>
    </div>
    <div>

      {city ? <WeatherWidget  city={city} latitude = {latitude} longitude = {longitude} country={country} temperature={temperature} pressure={pressure} humidity = {humidity} windspeed={windspeed} description={description}/> : <h3>City not found</h3>}
    </div>
    </div>
    
  );
}

export default App;
