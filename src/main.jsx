import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    let location = document.getElementById("city").value;
    let API_KEY = "7d9eeb8ace209da0d28e33e2dd6d0fcf";

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=${API_KEY}&units=metric`
    );
    let data = await response.json();

    console.log(data);
    setData(data);
  };

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <h2>Qual cidade você quer ver agora?</h2>
          <div className="searchBox">
            <input
              type="text"
              name=""
              id="city"
              placeholder="Busque por uma cidade"
            />
            <button id="btn" onClick={getData}>
              Buscar
            </button>
          </div>
        </div>
        {data && (
          <div className="city-info">
            <div className="row cityInfo">
              <span id="cityName">{data.name}</span>
              <span id="temp">{data.main.temp}°C</span>
            </div>
            <div className="row">
              <span id="status">{data.weather[0].description}</span>
              <span id="media">Min {data.main.temp_min}° / Máx {data.main.temp_max}°</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
