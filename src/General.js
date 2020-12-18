import React, {useState} from "react";
import GeneralWeatherTypeCheck from "./GeneralWeatherTypeCheck";
import GeneralWeatherImage from "./GeneralWeatherImage";
import GeneralLady from "./GeneralLady"
import GeneralBtnSVG from "./GeneralBtnSVG";
import MoreDetails from "./MoreDetails";
import "./General.css";

const General = ({weather, extra, searchChange, searchSubmit, searchField}) => {
    
    let [input, setInput] = useState(false);
    let [wrapper, setWrapper] = useState(false);
    let [tempFormat, setTempFormat] = useState(true);
    let [next4DaysWrapper, setNext4DaysWrapper] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const searchFieldSize = () => {
        if (searchField.length < weather.name.length) {
            return weather.name.length+3; 
        }
        else {
            return searchField.length+3;
        }
    }; 

    const backgroundColorCheck = (weatherType) => {
        if (wrapper) {
            return {background: "#EEA594"};
        }
        if (weatherType === "Clear" || weatherType === "Clouds") {
            return {background: "#EEB625"};
        }
        else {
            return {background: "#61A9A6"};
        }
    };

    const transitionCheck = () => {
        return wrapper ? {transition: "top 300ms", top: "-54px"} : {transition: "top 300ms", top: "0px"};
    };

    // console.log(getComputedStyle(document.querySelector(".generalLocation")).height);

    const toggleWrapperClass = () => {
        setWrapper(!wrapper);
    };
    
    const scroll = (event) => {
        if (wrapper) {
            event.nativeEvent.wheelDelta < 0 ? setNext4DaysWrapper(true) : setNext4DaysWrapper(false);
        }
        if (next4DaysWrapper) {
            event.nativeEvent.wheelDelta < 0 ? setNext4DaysWrapper(true) : setNext4DaysWrapper(false);
        } 
        else {
            event.nativeEvent.wheelDelta < 0 ? setWrapper(true) : setWrapper(false);
        }
    };

    const inputFocus = () => {
        setInput(input = true);
        return wrapper ? setWrapper(wrapper = false) : null;
    };

    const inputBlur = () => {
        return searchField.length !== 0 ? null : setInput(input = false);
    };

    const inputSubmit = () => {
        if (searchField.length !== 0) {
            document.querySelector(".generalLocation").blur();
            setInput(input = false);
            // setWrapper(wrapper = true);
        }
        else {
            return null;
        }
    };
    
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

    // //------------------------------------ alternative to get previous state
    // const [touch, setTouch] = useState(0);
    // const prevTouchRef = useRef();
    // useEffect(() => {
    //     prevTouchRef.current = touch;
    // });
    // const prevTouch = prevTouchRef.current;
    
    // const touchHandle = (event) => {
    //     setTouch(event.changedTouches[0].clientY);
    //     touch < prevTouch ? setWrapper(true) : setWrapper(false);
    // }
    
    const touchStartHandle = (event) => {
    // console.log(event.target.className);
    //     if (event.target.className === "details24Name") {
    //         console.log("thissss");
    //         return;
    //     }
        setTouchStart(event.changedTouches[0].clientY);
    };

    const touchEndHandle = (event) => {
        if (event.target.className === "details24Name") {
            return;
        }
        setTouchEnd(event.changedTouches[0].clientY);

        if (wrapper) {
            touchStart - 5 > touchEnd ? setNext4DaysWrapper(true) : setNext4DaysWrapper(false);
        }
        if (next4DaysWrapper) {
            touchStart - 5 > touchEnd ? setNext4DaysWrapper(true) : setNext4DaysWrapper(false);
        } 
        else {
            touchStart - 5 > touchEnd ? setWrapper(true) : setWrapper(false);
        }
    };


    return (
        <div className="html" style={backgroundColorCheck(weather.weather[0].main)}>
            <div className="generalBody" style={backgroundColorCheck(weather.weather[0].main)}>
                <div className="generalWidgetWrapper" style={transitionCheck()}>
                    <form onSubmit={searchSubmit} onSubmitCapture={inputSubmit}>
                    {/* <form onSubmit={searchSubmit} onSubmitCapture={() => searchField.length !== 0 ? setInput(input) : null}> */}
                        <label style={{width: "375px", height: "230px", display: "inline-block", position: "absolute", zIndex: "1"}}>
                            <input className="generalLocation" onFocus={inputFocus} onBlur={inputBlur} size={searchFieldSize()} type="search" name="location" placeholder={!input ? weather.name : searchField} onChange={searchChange} autoComplete="off" style={backgroundColorCheck(weather.weather[0].main)}/>
                            {/* <input className="generalLocation" onFocus={() => {setInput(input = true); setWrapper(wrapper = true)}} onBlur={() => searchField.length !== 0 ? null : setInput(input = false)} size={searchFieldSize()} type="search" name="location" placeholder={!input ? weather.name : searchField} onChange={searchChange} autoComplete="off" style={backgroundColorCheck(weather.weather[0].main)}/> */}
                            <svg style={input ? {display: "none"} : null} className="generalMagGlass" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="2"/>
                                {/* changed stroke-width, stroke-linecap, stroke-linejoin to camelCase below */}
                                <line x1="8.06669" y1="9.08889" x2="10.2" y2="11.9333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                    </form>
                    <div className="generalInfoHandler">
                        <p className={!wrapper ? "generalTemp" : "generalTempSmall"}>{finalTemp(weather.main.temp)}&#176;</p>
                        <p className={!wrapper ? "generalSymbol" : "generalSymbolSmall"} onClick={() => setTempFormat(!tempFormat)}>{tempFormat ? "C" : "F"}</p>
                        <GeneralWeatherTypeCheck weatherType={weather.weather[0].main} wrapper={wrapper}/>
                    </div>
                    <p className="generalType">{weather.weather[0].main}</p>
                </div>

                <div className="generalBtnWrapper" style={transitionCheck()}>
                    <p onClick={toggleWrapperClass} className="generalBtn">{!wrapper ? "More details" : "Details"}</p>
                    <GeneralBtnSVG wrapper={wrapper}/>
                </div>

                <div className="generalTouchable" onWheel={scroll} onTouchStart={touchStartHandle} onTouchEnd={touchEndHandle}>
                {/* <div className="generalTouchable" onWheel={scroll} onTouchMove={touch} onClick={() => setCount(count+1)}> */}
                {/* <p style={{position: "absolute", top: "270px"}}>start: {touchStart}, end: {touchEnd}, dif: {touchStart-touchEnd}</p> */}
                    <GeneralWeatherImage weatherType={weather.weather[0].main} wrapper={wrapper}/>
                    <GeneralLady wrapper={wrapper}/>  
                    <MoreDetails weather={weather} extra={extra} wrapper={wrapper} tempFormat={tempFormat} next4DaysWrapper={next4DaysWrapper} setNext4DaysWrapper={setNext4DaysWrapper}/>
                </div>
            </div>
        </div>
    )
};

export default General;

            