import React, { useEffect, useRef, useState } from "react";
import GeneralWeatherTypeCheck from "./GeneralWeatherTypeCheck";
import GeneralWeatherImage from "./GeneralWeatherImage";
import GeneralLady from "./GeneralLady"
import "./General.css";

const General = ({weather, searchChange, searchSubmit, searchField, toggleDetails}) => {
    
    // const adjustPositionSymbol = () => {
    //     if ((weather.main.temp - 273.15).toFixed() < 10) {
    //         return {left: "148px"}
    //     }
    // };

    // }
    // const positionRef = useRef(null);

    // const [elementPositionWidth, setelementPositionWidth] = useState(true);
    // // console.log(1, elementPositionWidth);
    // useEffect(() => {
    //     // const currentRef = positionRef.current;
    //     // console.log(getComputedStyle(currentRef).left);
    //     // console.log(getComputedStyle(document.querySelector(".generalSymbol")).left);
    //     // (weather.main.temp - 273.15).toFixed() < 10 ? 
    //     // getComputedStyle(document.querySelector(".generalSymbol")).left = "148px" : console.log("hey")
        
    //     // console.log(getComputedStyle(document.querySelector(".generalTemp")).width);
    //     const newWidth = getComputedStyle(document.querySelector(".generalTemp")).width;
    //     // console.log(2, newWidth);
    //     // console.log(elementPositionWidth);
    //     setelementPositionWidth(!elementPositionWidth);
    //     // console.log(newWidth);
    //     // console.log(2, newWidth);
    //     // if ((weather.main.temp - 273.15).toFixed() < 10) {
    //     //     // return {left: "148px"}
    //     //     // const newWidth = getComputedStyle(document.querySelector(".generalSymbol")).left;
    //     //     // console.log(2, newWidth);
    //     //     // getComputedStyle(currentRef).className = "generalLocation";
    //     //     // console.log(3, getComputedStyle(currentRef).className);
    //     // }
    // }, []);

    let [input, setInput] = useState(false);
    console.log("input clicked", input);
    console.log("searchfield", searchField);

    const searchFieldSize = () => {
        if (searchField.length < weather.name.length) {
            return weather.name.length+4; 
        }
        else {
            return searchField.length+4;
        }
    }; 

    const backgroundColorCheck = (weatherType) => {
        if (weatherType === "Clear" || weatherType === "Clouds") {
            return {background: "#EEB625"};
        }
        else {
            return {background: "#61A9A6"};
        }
    }

    return (
        <div className="generalBody" style={backgroundColorCheck(weather.weather[0].main)}>
            <div>
                <form onSubmit={searchSubmit} onSubmitCapture={() => searchField.length !== 0 ? setInput(input) : null}>
                    <label style={{width: "375px", height: "230px", display: "inline-block", position: "absolute", zIndex: "1"}}>
                        <input className="generalLocation" onFocus={() => setInput(input = true)} onBlur={() => searchField.length !== 0 ? null : setInput(input = false)} size={searchFieldSize()} type="search" name="location" placeholder={!input ? weather.name : searchField} onChange={searchChange} autoComplete="off" style={backgroundColorCheck(weather.weather[0].main)}/>
                        <svg style={input ? {display: "none"} : null} className="generalMagGlass" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="2"/>
                            {/* changed stroke-width, stroke-linecap, stroke-linejoin to camelCase below */}
                            <line x1="8.06669" y1="9.08889" x2="10.2" y2="11.9333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>
                </form>
                <div className="generalInfoHandler">
                    <p className="generalTemp">{(weather.main.temp - 273.15).toFixed()}&#176;</p>
                    <p className="generalSymbol">C</p>
                    < GeneralWeatherTypeCheck weatherType={weather.weather[0].main}/>
                    <p className="generalType">{weather.weather[0].main}</p>
                </div>
            </div>
            <p onClick={toggleDetails} className="generalBtn">More details</p>
            <svg className="generalBtnSVG" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* changed stroke-linecap, stroke-linejoin, stroke-width to camelCase below */}
                <path d="M0.5 0.5L3.5 3.5L0.5 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <GeneralWeatherImage weatherType={weather.weather[0].main}/>
            <GeneralLady />  
        </div>
    )
};

export default General;

