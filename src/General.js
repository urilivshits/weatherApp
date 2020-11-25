import React from "react";

const General = ({weather}) => {
    return (
        <div>
            <input placeholder={weather.name}/>
            <p>Location: {weather.name}</p>
            <p>Temp: {(weather.main.temp - 273.15).toFixed()}<sup>0</sup>C</p>
            <p>Weather type: {weather.weather[0].main}</p>
            <button>More details ></button>
        </div>
    )
}

export default General;