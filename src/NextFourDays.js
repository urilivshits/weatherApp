import React from "react";

const NextFourDays = ({dailyWeather, tempFormat}) => {

    console.log(dailyWeather);

    const getDayOfWeek = (unixTime) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekdays[new Date(unixTime * 1000).getDay()];
    }
    
    const finalTemp = (temp) => {
        if (tempFormat) {
            let finalTemp = (temp - 273.15).toFixed();
            return finalTemp !== "-0" ? finalTemp : finalTemp = 0;
        }
        else if (!tempFormat) {
            let finalTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed();
            return finalTemp !== "-0" ? finalTemp : finalTemp = 0;
        }
    };

    const rainChance = (value) => {
        const min = value.temp.min - 273.15;
        const dew = value.dew_point - 273.15;
        let chance = ((dew/min) * 100).toFixed();
        if (chance > 100) {
            chance = 100;
        }
        return chance >= 50 ? chance+"%" : null
    };

    return (
        <div className="detailsNext4DaysData">
            <table>
                <tbody>
                    {
                        dailyWeather.map((value, i) => {
                            if (i > 4) {
                                console.log("Next 4 days rendered");
                            }
                            else if (i > 0) {
                                return (
                                    <tr key={i}>
                                        <td style={{width: "60px"}}>{getDayOfWeek(value.dt)}</td>
                                        <td style={{width: "120px", paddingLeft: "10px"}}>{value.weather[0].description}</td>
                                        <td><img alt="icon" src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`}></img></td>
                                        <td style={{color: "#0e59c9", paddingRight: "12px"}}>{rainChance(value)}</td>
                                        <td style={{paddingRight: "12px"}}>{finalTemp(value.temp.day)}&#176;</td>
                                        <td style={{color: "grey"}}>{finalTemp(value.temp.night)}&#176;</td>
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

