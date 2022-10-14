import React, { useState,useEffect } from "react";
export const WeatherWidget = (props) => {
    const [city, SetCity] = useState("");
    const [longitude, SetLongitude] = useState(0);
    const [latitude, SetLatitude] = useState(0);
    const [country, SetCountry] = useState("");
    const [temperature, SetTemperature] = useState(0);
    const [pressure, SetPressure] = useState(0);
    const [humidity, SetHumidity] = useState(0);
    const [windspeed,SetWindspeed] = useState(0);
    const [description, SetDescription] = useState("");
  
    useEffect(()=>{
      SetCity(props.city);
      SetLongitude(props.longitude);
      SetLatitude(props.latitude)
      SetCountry(props.country);
      SetTemperature(props.temperature);
      SetPressure(props.pressure);
      SetHumidity(props.humidity);
      SetWindspeed(props.windspeed);
      SetDescription(props.description);
  
    },[props.city]);
  
    return (
      <div>

        <h6>{city}</h6>
        <h6>{longitude}</h6>
        <h6>{latitude}</h6>
        <h6>{country}</h6>
        <h6>{temperature}</h6>
        <h6>{pressure}</h6>
        <h6>{humidity}</h6>
        <h6>{windspeed}</h6>
        <h6>{description}</h6>
        
      </div>
    );
  };
