import React from "react";
import {XYPlot, LineSeries, LabelSeries} from 'react-vis';
import IconBar from "./IconBar.js";


// import {ReactComponent as Asd} from "http://openweathermap.org/img/w/02d.png";

const Graph = ({thisHour}) => {

    const getHours = (unixTime) => {
        return new Date(unixTime * 1000).getHours();
    };

    const temp = [
        {x: 0, y: (thisHour[0].temp - 273.15).toFixed(), yOffset: -7},
        {x: 3, y: (thisHour[3].temp - 273.15).toFixed(), yOffset: -7},
        {x: 6, y: (thisHour[6].temp - 273.15).toFixed(), yOffset: -7},
        {x: 9, y: (thisHour[9].temp - 273.15).toFixed(), yOffset: -7},
        {x: 12, y: (thisHour[12].temp - 273.15).toFixed(), yOffset: -7},
        {x: 15, y: (thisHour[15].temp - 273.15).toFixed(), yOffset: -7}
    ];

    // const temp = [
    //     {x: 0, y: parseInt((thisHour[0].temp - 273.15).toFixed()), yOffset: -7},
    //     {x: 3, y: parseInt((thisHour[3].temp - 273.15).toFixed()), yOffset: -7},
    //     {x: 6, y: parseInt((thisHour[6].temp - 273.15).toFixed()), yOffset: -7},
    //     {x: 9, y: parseInt((thisHour[9].temp - 273.15).toFixed()), yOffset: -7},
    //     {x: 12, y: parseInt((thisHour[12].temp - 273.15).toFixed()), yOffset: -7},
    //     {x: 15, y: parseInt((thisHour[15].temp - 273.15).toFixed()), yOffset: -7}
    // ];

    const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    };

    const graphWidth = 375;
    const blockWidth = graphWidth/temp.length;
    
    return (
        <div>
            <XYPlot
                width={graphWidth}
                height={100}
                margin={{left: 20, right: 20, top: 20, bottom: 20}}>
                <LineSeries stroke={"#FFFFFF"} strokeWidth={"2.5px"} data={temp}/>
                <LabelSeries color={"#FFFFFF"} style={{fill: "#FFFFFF", fillWidth: "1px"}} data={temp} getLabel={d => d.y}  labelAnchorX={"middle"} labelAnchorY={"middle"}/>
            </XYPlot>
            <IconBar thisHour={thisHour} graphWidth={graphWidth} blockWidth={blockWidth}/>
            <div>
                <svg fill={"#FFFFFF"} fontSize={"11px"} width={graphWidth} height={25} textAnchor={"bottom"} dominantBaseline={"middle"}>
                    <text x={10} y={10}>{thisHour[0].wind_speed}m/s</text>
                    <text x={blockWidth} y={10} >{thisHour[3].wind_speed}m/s</text>
                    <text x={blockWidth*2} y={10}>{thisHour[6].wind_speed}m/s</text>
                    <text x={blockWidth*3} y={10}>{thisHour[9].wind_speed}m/s</text>
                    <text x={blockWidth*4} y={10}>{thisHour[12].wind_speed}m/s</text>
                    <text x={blockWidth*5} y={10}>{thisHour[15].wind_speed}m/s</text>
                </svg>
            </div>
            <svg width="311" height="20" viewBox="0 0 311 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="311" y2="0.5" stroke="white"/>
            </svg>
            <div>
                <svg fill={"#FFFFFF"} fontSize={"11px"} width={graphWidth} height={25} textAnchor={"bottom"} dominantBaseline={"middle"}>
                    <text x={10} y={10}>Now</text>
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
