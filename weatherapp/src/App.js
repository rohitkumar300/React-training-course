import React, { useState, useEffect } from "react";


const Display = () =>{
  return (
    <div>
      This is Display area
    </div>
  )
}
function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [search, Setsearch] = useState();

  useEffect(() => {
    // const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`
    const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63d6d88996e578187824190c05551ea7`;
    const fetchData = async () => {
      try {
        const response = await fetch(API_LINK);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [search]);

  const handleChange = (e) => {
    e.preventDefault();
    Setsearch(e.target.value);
  };
  return (
    <div className="App">
      This is weather App
      <input type="text" name="search" onChange={handleChange} value={search} />
      <Display />
    </div>
  );
}

export default App;
