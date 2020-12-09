import React from "react";
import Graph from "./Graph.js";
import NextFourDays from "./NextFourDays.js";
import "./MoreDetails.css";

const MoreDetails = ({weather, extra, wrapper}) => {
    const transitionCheck = () => {
        return wrapper ? {transition: "top 300ms", top: "0px"} : {transition: "top 300ms", top: "812px"};
    };
    return (
        <div className="detailsWrapper" style={transitionCheck()}>
            {/* <div className="detailsWrapperTouchable"> */}
                <div>
                    <p className="detailsWindSpeedName">Wind Speed</p>
                    <p className="detailsWindSpeedData">{weather.wind.speed}m/s</p>
                    <svg className="detailsWindSpeedIcon" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 19.5C4.5 20.3333 9.5 21.5 13.5 19.5C18.5 17 21.5 17.5 23 19.5C24.5 21.5 22 23.5 20.5 22.5C19 21.5 19.5 21 18.5 21" stroke="white" strokeLinecap="round"/>
                        <path d="M7 9.50003C8.66667 8.00003 11.98 5.50003 16 5.50003C23 5.50003 23 5.50004 23.5 4.00002C24 2.5 21.5 1.50001 21 1.5C20.5 1.49999 19.5 1.5 19 3.5M1 15C1 15 12.3 15.5 15.5 13.5C19.5 11 26.626 12.4938 26.5 17C20 15 20.5 15.5 14.5 16.5C8.5 17.5 1 15 1 15ZM4 13C4 13 10 13 13.5 12C17 11 17.5 9.50003 23.5 11C23 7.5 18 7 14 9.50003C10 12.0001 4 13 4 13Z" stroke="white" strokeLinecap="round"/>
                        <circle cx="4.5" cy="7.5" r="1.5" fill="white"/>
                        <circle cx="2.5" cy="22.5" r="1.5" fill="white"/>
                        <circle cx="14.5" cy="22.5" r="1.5" fill="white"/>
                        <circle cx="15.5" cy="1.5" r="1.5" fill="white"/>
                    </svg>
                </div>
                <div>
                    <p className="detailsCloudinessName">Cloudiness</p>
                    <p className="detailsCloudinessData">{weather.clouds.all}%</p>
                    <svg className="detailCloudinessIcon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5.25" stroke="white" strokeWidth="1.5"/>
                        <line x1="12.25" y1="4.25" x2="12.25" y2="0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="12.25" y1="23.25" x2="12.25" y2="19.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="4.25" y1="11.75" x2="0.75" y2="11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M23.5 12L20 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M18 6.47488L20.4749 4.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M4 20.4749L6.47487 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="4.06066" y1="4" x2="6.53553" y2="6.47487" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="18.0607" y1="18" x2="20.5355" y2="20.4749" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                <div>
                    <p className="detailsAtmPressName">A. Pressure</p>
                    <p className="detailsAtmPressData">{weather.main.pressure}hPa</p>
                    <svg className="detailsAtmPressIcon" width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.96456 3C8.72194 1.30385 7.26324 0 5.5 0C3.73676 0 2.27806 1.30385 2.03544 3H2V3.5V19.2572C0.778497 20.266 0 21.7921 0 23.5C0 26.5376 2.46243 29 5.5 29C8.53757 29 11 26.5376 11 23.5C11 21.7921 10.2215 20.266 9 19.2572V3.5V3H8.96456Z"/>
                        </mask>
                        <path d="M8.96456 3L7.97463 3.1416L8.09742 4H8.96456V3ZM2.03544 3V4H2.90258L3.02537 3.1416L2.03544 3ZM2 3V2H1V3H2ZM2 19.2572L2.63678 20.0282L3 19.7282V19.2572H2ZM9 19.2572H8V19.7282L8.36322 20.0282L9 19.2572ZM9 3H10V2H9V3ZM9.95448 2.8584C9.64241 0.676706 7.76788 -1 5.5 -1V1C6.75859 1 7.80147 1.931 7.97463 3.1416L9.95448 2.8584ZM5.5 -1C3.23212 -1 1.35759 0.676706 1.04552 2.8584L3.02537 3.1416C3.19853 1.931 4.24141 1 5.5 1V-1ZM2 4H2.03544V2H2V4ZM3 3.5V3H1V3.5H3ZM3 19.2572V3.5H1V19.2572H3ZM1.36322 18.4861C-0.0784427 19.6767 -1 21.4812 -1 23.5H1C1 22.103 1.63544 20.8552 2.63678 20.0282L1.36322 18.4861ZM-1 23.5C-1 27.0898 1.91015 30 5.5 30V28C3.01472 28 1 25.9853 1 23.5H-1ZM5.5 30C9.08985 30 12 27.0898 12 23.5H10C10 25.9853 7.98528 28 5.5 28V30ZM12 23.5C12 21.4812 11.0784 19.6767 9.63678 18.4861L8.36322 20.0282C9.36456 20.8552 10 22.103 10 23.5H12ZM8 3.5V19.2572H10V3.5H8ZM8 3V3.5H10V3H8ZM8.96456 4H9V2H8.96456V4Z" fill="white" mask="url(#path-1-inside-1)"/>
                        <circle cx="5.5" cy="23.5" r="2" stroke="white"/>
                        <line x1="5.5" y1="21.5" x2="5.5" y2="4.5" stroke="white" strokeLinecap="round"/>
                        <line x1="2.5" y1="5.5" x2="3.5" y2="5.5" stroke="white" strokeLinecap="round"/>
                        <line x1="2.5" y1="8.5" x2="3.5" y2="8.5" stroke="white" strokeLinecap="round"/>
                        <line x1="2.5" y1="11.5" x2="3.5" y2="11.5" stroke="white" strokeLinecap="round"/>
                        <line x1="2.5" y1="14.5" x2="3.5" y2="14.5" stroke="white" strokeLinecap="round"/>
                    </svg>
                    <svg className="detailsAtmPressIcon" width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.96456 3C8.72194 1.30385 7.26324 0 5.5 0C3.73676 0 2.27806 1.30385 2.03544 3H2V3.5V19.2572C0.778497 20.266 0 21.7921 0 23.5C0 26.5376 2.46243 29 5.5 29C8.53757 29 11 26.5376 11 23.5C11 21.7921 10.2215 20.266 9 19.2572V3.5V3H8.96456Z"/>
                        </mask>
                        <path d="M8.96456 3L7.97463 3.1416L8.09742 4H8.96456V3ZM2.03544 3V4H2.90258L3.02537 3.1416L2.03544 3ZM2 3V2H1V3H2ZM2 19.2572L2.63678 20.0282L3 19.7282V19.2572H2ZM9 19.2572H8V19.7282L8.36322 20.0282L9 19.2572ZM9 3H10V2H9V3ZM9.95448 2.8584C9.64241 0.676706 7.76788 -1 5.5 -1V1C6.75859 1 7.80147 1.931 7.97463 3.1416L9.95448 2.8584ZM5.5 -1C3.23212 -1 1.35759 0.676706 1.04552 2.8584L3.02537 3.1416C3.19853 1.931 4.24141 1 5.5 1V-1ZM2 4H2.03544V2H2V4ZM3 3.5V3H1V3.5H3ZM3 19.2572V3.5H1V19.2572H3ZM1.36322 18.4861C-0.0784427 19.6767 -1 21.4812 -1 23.5H1C1 22.103 1.63544 20.8552 2.63678 20.0282L1.36322 18.4861ZM-1 23.5C-1 27.0898 1.91015 30 5.5 30V28C3.01472 28 1 25.9853 1 23.5H-1ZM5.5 30C9.08985 30 12 27.0898 12 23.5H10C10 25.9853 7.98528 28 5.5 28V30ZM12 23.5C12 21.4812 11.0784 19.6767 9.63678 18.4861L8.36322 20.0282C9.36456 20.8552 10 22.103 10 23.5H12ZM8 3.5V19.2572H10V3.5H8ZM8 3V3.5H10V3H8ZM8.96456 4H9V2H8.96456V4Z" fill="white" mask="url(#path-1-inside-1)"/>
                    </svg>
                </div>
                <div>
                    <p className="detailsHumidityName">Humidity</p>
                    <p className="detailsHumidityData">{weather.main.humidity}%</p>
                    <svg className="detailsHumidityIcon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5" cy="10.5" r="9.5" stroke="white" strokeWidth="2"/>
                        <path d="M15 6C12.8333 7 8.23509 9.73509 9.5 11C11 12.5 13.5 8.33333 15 6Z" fill="white"/>
                    </svg>
                </div>
                <p className="details24Name">24 - hours forecast</p>
                <div className="detailsGraph">
                    <Graph thisHour={extra.hourly} />
                </div>
            {/* </div> */}
                {/* <NextFourDays dailyWeather={extra.daily}/> */}
        </div>
    )
};

export default MoreDetails;

