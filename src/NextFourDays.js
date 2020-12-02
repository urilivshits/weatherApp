import React from "react";

const NextFourDays = ({dailyWeather}) => {

    console.log(dailyWeather);

    const getDayOfWeek = (unixTime) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekdays[new Date(unixTime * 1000).getDay()];
    }
    
    return (
        <div className="tc dib">
            <table>
                <tbody>
                    {
                        dailyWeather.map((value, i) => {
                            if (i > 3) {
                                console.log("Next 4 days rendered");
                            }
                            else {
                                return (
                                    <tr key={i}>
                                        <td>{getDayOfWeek(value.dt)}</td>
                                        <td><img alt="icon" src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`}></img></td>
                                        <td>{value.weather[0].description}</td>
                                        <td>{(value.temp.day - 273.15).toFixed()}<sup>0</sup>C</td>
                                        <td>{(value.temp.night - 273.15).toFixed()}<sup>0</sup>C</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NextFourDays;

