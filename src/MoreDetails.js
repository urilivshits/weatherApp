import React from "react";
import Graph from "./Graph.js";
import NextFourDays from "./NextFourDays.js";

const MoreDetails = ({weather, extra}) => {
    let getHours = (unixTime) => {
        return new Date(unixTime * 1000).getHours();
    }

    return (
        <div>
            {/* <h3>More Details State</h3> */}
            <div>
                <p>Wind Speed: {weather.wind.speed}m/s</p>
                <p>Atmospheric Pressure: {weather.main.pressure}hPa</p>
                <p>Cloudiness: {weather.clouds.all}%</p>
                <p>Humidity: {weather.main.humidity}%</p>
            </div>
            <div>
                {/* <h4>24 - hours forecast</h4>
                <p>Temp: {(extra.hourly[0].temp - 273.15).toFixed()}<sup>0</sup>C</p>
                <p><img alt="icon" src={`http://openweathermap.org/img/w/${extra.hourly[0].weather[0].icon}.png`}></img></p>
                <p>Wind Speed: {extra.hourly[0].wind_speed}m/s</p>
                <p>Hours: {getHours(extra.hourly[0].dt)}</p> */}
                <Graph thisHour={extra.hourly} />
                {/* <h4>Next 4 days</h4> */}
                <NextFourDays dailyWeather={extra.daily}/>
                {/* {
                    extra.hourly.map((weather, i) => {
                        return (
                            <div>
                                <p>{i}</p>
                                <p>Temp: {(weather.temp - 273.15).toFixed()}<sup>0</sup>C</p>
                                <p><img alt="icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img></p>
                                <p>Wind Speed: {weather.wind_speed}</p>
                                <p>Hours: {getHours(weather.dt)}</p>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
};

export default MoreDetails;

