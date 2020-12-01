import React from "react";
import {XYPlot, LineSeries, LabelSeries} from 'react-vis';
import IconBar from "./IconBar.js";


// import {ReactComponent as Asd} from "http://openweathermap.org/img/w/02d.png";

const Graph = ({thisHour}) => {
    
    let getHours = (unixTime) => {
        return new Date(unixTime * 1000).getHours();
    };

    const temp = [
        {x: 0, y: parseInt((thisHour[0].temp - 273.15).toFixed()), yOffset: -5},
        {x: 3, y: parseInt((thisHour[3].temp - 273.15).toFixed()), yOffset: -5},
        {x: 6, y: parseInt((thisHour[6].temp - 273.15).toFixed()), yOffset: -5},
        {x: 9, y: parseInt((thisHour[9].temp - 273.15).toFixed()), yOffset: -5},
        {x: 12, y: parseInt((thisHour[12].temp - 273.15).toFixed()), yOffset: -5},
        {x: 15, y: parseInt((thisHour[15].temp - 273.15).toFixed()), yOffset: -5}
    ];
    
    const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    };

    const graphWidth = 500;
    const blockWidth = 90;
    
    return (
        <div>
            <XYPlot
                width={graphWidth}
                height={100}
                margin={{left: 20, right: 20, top: 20, bottom: 20}}>
                <LineSeries data={temp}/>
                <LabelSeries data={temp} getLabel={d => d.y}  labelAnchorX={"middle"} labelAnchorY={"middle"}/>
            </XYPlot>
            <IconBar thisHour={thisHour} graphWidth={graphWidth} blockWidth={blockWidth}/>
            <div>
                <svg width={graphWidth} height={50}>
                    <text x={0} y={10}>{thisHour[0].wind_speed}m/s</text>
                    <text x={blockWidth} y={10}>{thisHour[3].wind_speed}m/s</text>
                    <text x={blockWidth*2} y={10}>{thisHour[6].wind_speed}m/s</text>
                    <text x={blockWidth*3} y={10}>{thisHour[9].wind_speed}m/s</text>
                    <text x={blockWidth*4} y={10}>{thisHour[12].wind_speed}m/s</text>
                    <text x={blockWidth*5} y={10}>{thisHour[15].wind_speed}m/s</text>
                </svg>
            </div>
            <div>
                <svg width={graphWidth} height={50}>
                    <text x={0} y={10}>Now</text>
                    <text x={blockWidth} y={10}>{addZero(getHours(thisHour[3].dt))+":00"}</text>
                    <text x={blockWidth*2} y={10}>{addZero(getHours(thisHour[6].dt))+":00"}</text>
                    <text x={blockWidth*3} y={10}>{addZero(getHours(thisHour[9].dt))+":00"}</text>
                    <text x={blockWidth*4} y={10}>{addZero(getHours(thisHour[12].dt))+":00"}</text>
                    <text x={blockWidth*5} y={10}>{addZero(getHours(thisHour[15].dt))+":00"}</text>
                </svg>
            </div>
        </div>
    )
}

export default Graph;
