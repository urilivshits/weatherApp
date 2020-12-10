import React from "react";
import {XYPlot, LineSeries, LabelSeries} from 'react-vis';
import IconBar from "./IconBar.js";

const Graph = ({thisHour, tempFormat}) => {

    const getHours = (unixTime) => {
        return new Date(unixTime * 1000).getHours();
    };

    const finalTemp = (temp) => {
        if (tempFormat) {
            let finalTemp = (temp - 273.15).toFixed();
            return finalTemp !== "-0" ? finalTemp : finalTemp = "0";
        }
        else if (!tempFormat) {
            let finalTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed();
            return finalTemp !== "-0" ? finalTemp : finalTemp = "0";
        }
    };

    const temp = [
        {x: 0, y: finalTemp(thisHour[0].temp).toString(), yOffset: -7},
        {x: 3, y: finalTemp(thisHour[3].temp).toString(), yOffset: -7},
        {x: 6, y: finalTemp(thisHour[6].temp).toString(), yOffset: -7},
        {x: 9, y: finalTemp(thisHour[9].temp).toString(), yOffset: -7},
        {x: 12, y: finalTemp(thisHour[12].temp).toString(), yOffset: -7},
        {x: 15, y: finalTemp(thisHour[15].temp).toString(), yOffset: -7}
    ];

    const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    };

    const graphWidth = 375;
    const blockWidth = graphWidth/temp.length;
    
    const positionOffset = {
        position: "relative",
        top: "-15"
    };

    

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
                <svg fill={"#FFFFFF"} fontSize={"11px"} width={graphWidth} height={"20"} textAnchor={"bottom"} dominantBaseline={"middle"}>
                    <text x={10} y={10}>{thisHour[0].wind_speed}m/s</text>
                    <text x={blockWidth} y={10} >{thisHour[3].wind_speed}m/s</text>
                    <text x={blockWidth*2} y={10}>{thisHour[6].wind_speed}m/s</text>
                    <text x={blockWidth*3} y={10}>{thisHour[9].wind_speed}m/s</text>
                    <text x={blockWidth*4} y={10}>{thisHour[12].wind_speed}m/s</text>
                    <text x={blockWidth*5} y={10}>{thisHour[15].wind_speed}m/s</text>
                </svg>
            </div>
            <svg className="line" style={positionOffset} width="311" height="10" viewBox="0 0 311 1" fill="none" strokeWidth="0.8" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="311" y2="0.5" stroke="white"/>
            </svg>
            <div>
                <svg style={positionOffset} fill={"#FFFFFF"} fontSize={"11px"} width={graphWidth} height={"20"} textAnchor={"bottom"} dominantBaseline={"middle"}>
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
