import React, { useState,useEffect } from "react";
export const WeatherWidget = (props) => {
    const [city, SetCity] = useState("");
    const [country, SetCountry] = useState("");
    const [temperature, SetTemperature] = useState(0);
    const [pressure, SetPressure] = useState(0);
  
    useEffect(()=>{
      SetCity(props.city);
      SetCountry(props.country);
      SetTemperature(props.temperature);
      SetPressure(props.pressure);
  
    },[props.city]);
  
    return (
      <div>
        <h1>City : </h1>
        <h3> {city} </h3>
        <h1>Country : </h1>
        <h3> {country} </h3>
        <h1>Temperature : </h1>
        <h3>{temperature} </h3>
        <h1>Pressure : </h1>
        <h3>{pressure} </h3>
      </div>
    );
  };
