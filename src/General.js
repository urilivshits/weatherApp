import React, { useEffect, useRef, useState } from "react";
import GeneralWeatherTypeCheck from "./GeneralWeatherTypeCheck";
import GeneralWeatherImage from "./GeneralWeatherImage";
import GeneralLady from "./GeneralLady"
import GeneralBtnSVG from "./GeneralBtnSVG";
import "./General.css";

const General = ({weather, searchChange, searchSubmit, searchField, toggleDetails}) => {
    
    let [input, setInput] = useState(false);

    const searchFieldSize = () => {
        if (searchField.length < weather.name.length) {
            return weather.name.length+3; 
        }
        else {
            return searchField.length+3;
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

    const transitionCheck = () => {
        return wrapper ? {transition: "top 300ms", top: "-54px"} : {transition: "top 300ms", top: "0px"};
    };

    // console.log("heeeeey", getComputedStyle(document.querySelector(".generalLocation")).height);
    const [wrapper, setWrapper] = useState(false);

    const toggleWrapperClass = () => {
        setWrapper(!wrapper);
    };

    console.log(wrapper);
    
    return (
        <div className="generalBody" style={backgroundColorCheck(weather.weather[0].main)}>
            
            <div className="generalWidgetWrapper" style={transitionCheck()}>
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
                </div>
                <p className="generalType">{weather.weather[0].main}</p>
            </div>

            <div className="generalBtnWrapper" style={transitionCheck()}>
                <p onClick={toggleWrapperClass} className="generalBtn">{!wrapper ? "More details" : "Details"}</p>
                {/* <p onClick={toggleDetails} className="generalBtn">More details</p> */}
                <GeneralBtnSVG wrapper={wrapper} />
            </div>
            {/* <div className="testDiv">
                <p className="testP">test</p>
                <p className="testP">test</p>
                <p className="testP">test</p>
            </div> */}

            <GeneralWeatherImage weatherType={weather.weather[0].main}/>
            <GeneralLady />  
        </div>
    )
};

export default General;

            