import React from "react";

const GeneralBtnSVG = ({wrapper}) => {
    return (
        <svg style={wrapper ? {transform: "rotate(90deg)"} : null} className="generalBtnSVG" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* changed stroke-linecap, stroke-linejoin, stroke-width to camelCase below */}
            <path d="M0.5 0.5L3.5 3.5L0.5 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default GeneralBtnSVG;