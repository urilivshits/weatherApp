import React, { useEffect, useRef, useState } from "react";
import "./General.css";

const General = ({weather, searchChange, searchSubmit, searchField}) => {
    
    const weatherTypeCheck = (weatherType) => {
        if (weatherType === "Clear" || weatherType === "Clouds") {
            return (
                // <svg className="generalIconClear" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg style={adjustPositionType()} className="generalIconClear" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                // <svg className="generalIconElse" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg style={adjustPositionType()} className="generalIconElse" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        if (searchField.length < weather.name.length) {
            return weather.name.length+4; 
        }
        else {
            return searchField.length+4;
        }
    }; 

    const adjustPositionSymbol = () => {
        if ((weather.main.temp - 273.15).toFixed() < 10) {
            return {left: "148px"}
        }
    };

    const adjustPositionType = () => {
        if ((weather.main.temp - 273.15).toFixed() < 10) {
            return {left: "114px"}
        }
    };
    
    // const placeholder = () => {
    //     if (searchField.length === 0) {
    //         return weather.name;
    //     }
    //     else {
    //         return "";
    //     }
    // //   event.target.reset();
    // //   return weather.name;

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

    const fadeMagGlass = () => {
        return console.log("faded")
    }

    return (
        <div>
            <div className="flex">
                <form onSubmit={searchSubmit}>
                    <label>
                        <input onMouseEnter={fadeMagGlass()} size={searchFieldSize()} className="generalLocation" type="search" name="location" placeholder={weather.name} onChange={searchChange} autoComplete="off"/>
                    </label>
                </form>
                <svg className="generalMagGlass" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="2"/>
                    {/* changed stroke-width, stroke-linecap, stroke-linejoin to camelCase below */}
                    <line x1="8.06669" y1="9.08889" x2="10.2" y2="11.9333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <p className="generalTemp">{(weather.main.temp - 273.15).toFixed()}&#176;</p>
            <p className="generalSymbol" style={adjustPositionSymbol()}>C</p>
            <p className="generalType">{weather.weather[0].main}</p>
            <p className="generalBtn">More details</p>
            <svg className="generalBtnSVG" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* changed stroke-linecap, stroke-linejoin, stroke-width to camelCase below */}
                <path d="M0.5 0.5L3.5 3.5L0.5 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{weatherTypeCheck(weather.weather[0].main)}</p>
            <svg className="generalSun" width="375" height="486" viewBox="0 0 375 486" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M166.033 178.676C154.987 178.678 146.031 169.725 146.029 158.68L146.004 20.0074C146.002 8.96173 154.954 0.00576817 166 0.00372349C177.046 0.00167882 186.002 8.95432 186.004 20L186.029 158.672C186.031 169.718 177.079 178.674 166.033 178.676ZM432 328.488C432 339.534 423.046 348.488 412 348.488H334.873C323.827 348.488 314.873 339.534 314.873 328.488C314.873 317.442 323.827 308.488 334.873 308.488H412C423.046 308.488 432 317.442 432 328.488ZM146.033 568.617C146.033 579.663 154.987 588.617 166.033 588.617C177.079 588.617 186.033 579.663 186.033 568.617V476.849C186.033 465.803 177.079 456.849 166.033 456.849C154.987 456.849 146.033 465.803 146.033 476.849V568.617ZM276.656 217.918C268.487 210.484 267.891 197.834 275.325 189.665L357.955 98.8691C365.39 90.6999 378.039 90.1042 386.208 97.5387C394.378 104.973 394.973 117.622 387.539 125.792L304.909 216.588C297.474 224.757 284.825 225.353 276.656 217.918ZM1.11009 123.021C-7.14557 115.682 -19.787 116.426 -27.1254 124.682C-34.4637 132.937 -33.7201 145.579 -25.4645 152.917L41.269 212.236C49.5246 219.574 62.1661 218.83 69.5045 210.575C76.8428 202.319 76.0992 189.678 67.8436 182.339L1.11009 123.021ZM81.8846 420.421C89.5915 428.334 89.4246 440.996 81.5119 448.703L12.5605 515.861C4.64776 523.568 -8.01445 523.401 -15.7213 515.488C-23.4282 507.575 -23.2614 494.913 -15.3487 487.206L53.6028 420.048C61.5155 412.342 74.1777 412.508 81.8846 420.421ZM339.073 520.726C346.808 528.611 359.471 528.734 367.356 520.999C375.242 513.264 375.364 500.601 367.629 492.716L296.668 420.372C288.933 412.486 276.271 412.364 268.385 420.099C260.5 427.834 260.377 440.496 268.112 448.382L339.073 520.726ZM40.7411 328.488C40.8189 339.533 31.9279 348.55 20.8825 348.628L-77.7189 349.322C-88.7643 349.4 -97.7815 340.509 -97.8592 329.464C-97.937 318.418 -89.046 309.401 -78.0006 309.323L20.6008 308.629C31.6462 308.551 40.6633 317.442 40.7411 328.488ZM173.832 434.4C238.789 434.4 291.447 381.742 291.447 316.785C291.447 251.828 238.789 199.169 173.832 199.169C108.875 199.169 56.2172 251.828 56.2172 316.785C56.2172 381.742 108.875 434.4 173.832 434.4Z" fill="#FFDB7E"/>
            </svg>
            <svg className="generalLady" width="219" height="316" viewBox="0 0 219 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M99.3513 115.261C109.151 113.034 109.374 102.825 108.26 97.9997C112.529 98.3709 123.183 99.4474 131.647 100.784C130.31 112.366 134.431 112.663 136.658 111.363L119.954 134.75C114.571 130.109 102.915 119.716 99.3513 115.261Z" fill="#FEDEA3"/>
                <circle cx="124.965" cy="67.3748" r="30.6249" fill="#302F41"/>
                <circle cx="121.624" cy="81.852" r="22.8295" fill="#FEDEA3"/>
                {/* changed clip-rule, flip-reule to camelCase below */}
                <path fillRule="evenodd" clipRule="evenodd" d="M153.256 24.5148C154.737 22.0746 155.59 19.2107 155.59 16.1477C155.59 7.22956 148.36 0 139.442 0C130.524 0 123.294 7.22956 123.294 16.1477C123.294 16.3462 123.298 16.5439 123.305 16.7406C110.446 20.3727 101.022 32.1937 101.022 46.2158C101.022 63.1294 114.733 76.8407 131.647 76.8407C148.56 76.8407 162.272 63.1294 162.272 46.2158C162.272 37.7355 158.825 30.0604 153.256 24.5148Z" fill="#302F41"/>
                <path d="M157.13 223.283L150.449 192.658L93.0965 188.761L83.6306 199.897L76.392 213.261C73.2367 212.704 62.4716 208.806 44.6535 197.67C22.3808 183.749 4.00591 186.534 1.77864 197.67C-0.448625 208.806 -2.67589 213.818 40.7558 242.215C84.1875 270.613 150.449 262.261 166.596 262.261C179.514 262.261 174.949 270.427 171.051 274.511C174.949 290.844 183.969 321.729 188.869 314.601C194.994 305.692 216.71 272.283 218.38 247.783C219.717 228.183 178.104 223.283 157.13 223.283Z" fill="#3D3C54"/>
                <path d="M33.0901 199.34C37.9159 201.568 49.1265 206.468 55.3628 208.249C63.1582 210.477 82.6468 220.499 92.1127 230.522" stroke="#33384C"/>
                <path d="M145.037 244.442C133.901 243.997 103.647 234.977 89.9121 230.522C78.0333 235.905 59.5099 247.226 80.4462 249.454C106.617 252.238 175.662 279.522 174.548 267.272C173.435 255.022 158.957 244.999 145.037 244.442Z" fill="#EEC68E"/>
                <path d="M171.181 145.886C171.923 161.291 172.962 192.77 171.181 195.443C168.953 198.783 157.817 221.056 149.465 226.624C142.783 231.079 140.741 240.73 140.556 244.999C137.564 246.196 132.707 247.521 128.301 247.386C129.113 250.75 128.823 253.351 123.851 253.351C116.724 253.351 109.003 242.958 106.033 237.761C103.991 234.42 98.5718 226.736 93.2263 222.727C86.5445 217.715 76.5218 208.806 75.4082 193.772C74.2946 178.738 73.7378 168.715 75.4082 158.136C76.7446 149.672 84.8741 154.609 88.7718 158.136C88.5862 170.571 89.8855 196.779 96.5673 202.124C103.062 207.32 116.963 222.952 123.087 232.529C127.865 228.086 135.178 223.924 137.772 219.386C142.226 211.59 149.465 197.67 154.476 193.772V153.681L170.624 145.329L171.181 145.886Z" fill="#F3CF9B"/>
                <path d="M119.397 132.522L98.7945 113.591C96.3816 115.818 89.7741 120.718 82.6468 122.5C73.7378 124.727 69.2832 132.522 69.2832 140.318C69.84 148.113 67.056 158.136 66.4991 163.704C68.281 164.595 73.5522 162.219 75.965 160.92C78.9347 159.992 85.765 158.693 89.3286 160.92C87.9922 172.502 90.4423 190.988 93.7831 198.227C97.6809 196.927 108.372 195.108 122.181 198.227C135.99 201.345 146.124 199.711 151.135 197.113L154.476 193.772V153.681L173.408 146.443C172.851 145.886 171.292 141.543 169.51 128.625C167.728 115.706 157.26 111.363 152.249 110.806L134.431 109.693L119.397 132.522Z" fill="#302F41"/>
            </svg>

            {/* <p className="generalSymbol" ref={positionRef}>C</p> */}
            {/* <button onClick={searchSubmit}>click</button> */}
            {/* <p>Location: {weather.name}</p> */}
            {/* <img alt="icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img> */}
        </div>
    )
};

export default General;

