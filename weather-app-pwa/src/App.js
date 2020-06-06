// We apply useState Hooks to manage state

import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
import $ from "jquery";

const App = () => {
  // deconstruct useState -> declare state variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };
  //   background: rgba(26, 27, 28, 0.85);
  // const toggle = () => {
  //   $("#root").addClass("rootDark").removeClass("root");
  //   $("#searchbox").addClass("searchDark").removeClass("search");
  //   $("#city").addClass("cityDark").removeClass("city");
  //   $("#city-temp").addClass("city-tempDark").removeClass("city-temp");
  //   console.log("HERE!!!");
  // };

  $(document).ready(function () {
    var images = [
      "bg-img1.jpg",
      "bg-img2.jpg",
      "bg-img3.jpg",
      "bg-img4.jpg",
      "bg-img5.jpg",
      "bg-img6.jpg",
    ];
    $("#main").css({
      "background-image":
        "url(./images/" +
        images[Math.floor(Math.random() * images.length)] +
        ")",
    });
  });

  //   console.log(weather.main);
  return (
    <div className="main-container" id="main">
      {/* <div>
        <button onClick={toggle}></button>
      </div> */}
      <input
        type="text"
        className="search"
        id="searchbox"
        placeholder="Search.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city" id="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
            {/* <span>{weather.weather[0].description}</span> */}
          </h2>
          <div className="city-temp" id="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="{weather.weather[0].description}"
              className="city-icon"
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
