import React from "react";

const General = ({weather, searchChange, searchSubmit, searchSubmitForecast}) => {
    // var input = document.querySelector(".input");
    // console.log(input);
    return (
        <div>
            <h3>General State</h3>
            <input placeholder={weather.name} onChange={searchChange}/>
            {/* <button onClick={() => {searchSubmit(); searchSubmitForecast()}}>click</button> */}
            <button onClick={searchSubmit}>click</button>
            <p>Location: {weather.name}</p>
            <p>Temp: {(weather.main.temp - 273.15).toFixed()}<sup>0</sup>C</p>
            <p>Weather type: {weather.weather[0].main}</p>
            <p><img alt="icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img></p>
            <button>More details ></button>
        </div>
    )
};

export default General;