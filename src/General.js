import React from "react";
import "./General.css";

const General = ({weather, searchChange, searchSubmit, searchField}) => {
    
    const weatherTypeCheck = (weatherType) => {
        if (weatherType === "Clear" || weatherType === "Clouds") {
            return (
                <svg className="generalIconClear" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* changed stroke-linecap, stroke-width to camelCase below */}
                    <circle cx="14" cy="14" r="6.25" stroke="#FBEDA7" strokeWidth="1.5"/>
                    <line x1="14.4167" y1="5.08334" x2="14.4167" y2="0.75001" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="14.4167" y1="27.25" x2="14.4167" y2="22.9167" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="5.08331" y1="13.5833" x2="0.749979" y2="13.5833" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M27.4167 14L23.3334 14" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M21 7.55402L23.8874 4.66666" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4.66669 23.8874L7.55404 21" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="4.56066" y1="4.66666" x2="7.62479" y2="7.73079" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="20.894" y1="21" x2="23.9581" y2="24.0641" stroke="#FBEDA7" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            )
        } 
        else {
            return (
                <svg className="generalIconElse" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* changed fill-rule and clip-rule to camelCase below */}
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.4877 18H7.48773V17.9725C7.32357 17.9907 7.15674 18 6.98773 18C4.50245 18 2.48773 15.9853 2.48773 13.5C2.48773 11.0147 4.50245 9 6.98773 9C7.16739 9 7.34458 9.01053 7.51873 9.031C7.49826 8.85685 7.48773 8.67965 7.48773 8.5C7.48773 6.01472 9.50245 4 11.9877 4C12.7514 4 13.4706 4.19022 14.1006 4.52584C15.252 1.86319 17.9023 0 20.9877 0C24.6168 0 27.6439 2.57756 28.3381 6.00183C28.3878 6.00061 28.4377 6 28.4877 6C31.8014 6 34.4877 8.68629 34.4877 12C34.4877 14.973 32.3254 17.441 29.4877 17.917V18H28.4877Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.4877 18H8.48773V17.9725C8.32355 17.9907 8.15674 18 7.98773 18C5.50244 18 3.48773 15.9853 3.48773 13.5C3.48773 11.0147 5.50244 9 7.98773 9C8.16736 9 8.3446 9.01053 8.51874 9.03101C8.49829 8.85684 8.48773 8.67966 8.48773 8.5C8.48773 6.01471 10.5024 4 12.9877 4C13.7513 4 14.4706 4.19022 15.1006 4.52585C16.252 1.86319 18.9022 0 21.9877 0C25.6168 0 28.6439 2.57755 29.3381 6.00183L29.3883 6.00082C29.4214 6.00027 29.4545 6 29.4877 6C32.8015 6 35.4877 8.68628 35.4877 12C35.4877 14.973 33.3254 17.441 30.4877 17.9171V18H29.4877Z" fill="#AEDAFF"/>
                    <path d="M1.98775 21C3.48775 23.5 5.58775 28.5 1.98775 28.5C-1.61225 28.5 0.487746 23.5 1.98775 21Z" fill="#AEDAFF"/>
                    <path d="M8.47548 27C9.97548 29.5 12.0755 34.5 8.47548 34.5C4.87548 34.5 6.97548 29.5 8.47548 27Z" fill="#AEDAFF"/>
                    <path d="M15.4755 21C16.9755 23.5 19.0755 28.5 15.4755 28.5C11.8755 28.5 13.9755 23.5 15.4755 21Z" fill="#AEDAFF"/>
                    <path d="M23.4755 27C24.9755 29.5 27.0755 34.5 23.4755 34.5C19.8755 34.5 21.9755 29.5 23.4755 27Z" fill="#AEDAFF"/>
                    <path d="M28.4755 21C29.9755 23.5 32.0755 28.5 28.4755 28.5C24.8755 28.5 26.9755 23.5 28.4755 21Z" fill="#AEDAFF"/>
                </svg>
            )
        }
    };

    const searchFieldSize = () => {
        if (searchField.length+3 < weather.name.length+3) {
            return weather.name.length+3; 
        }
        else {
            return searchField.length+3;
        }
    }; 

    const adjustPosition = () => {
        if ((weather.main.temp - 273.15).toFixed() < 10) {
            return {left: "148px"}
        }
        // const asd = getComputedStyle(document.querySelector(".generalSymbol"));
        // console.log(asd);
    }

    return (
        <div>
            <form onSubmit={searchSubmit}>
                <label>
                    <input size={searchFieldSize()} className="generalLocation" type="search" name="location" placeholder={weather.name} onChange={searchChange}/>
                </label>
            </form>
            <p className="generalTemp">{(weather.main.temp - 273.15).toFixed()}&#176;</p>
            <p className="generalSymbol" style={adjustPosition()}>C</p>
            <p className="generalType">{weather.weather[0].main}</p>
            <p className="generalBtn">More details</p>
            <svg className="generalBtnSVG" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* changed stroke-linecap, stroke-linejoin, stroke-width to camelCase below */}
                <path d="M0.5 0.5L3.5 3.5L0.5 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{weatherTypeCheck(weather.weather[0].main)}</p>
            {/* autoComplete="on" */}
            {/* <button onClick={searchSubmit}>click</button> */}
            {/* <p>Location: {weather.name}</p> */}
            {/* <img alt="icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img> */}
        </div>
    )
};

export default General;