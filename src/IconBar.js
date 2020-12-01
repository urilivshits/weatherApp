import React, {useEffect, useRef} from "react";
import "./IconBar.css";

const IconBar = ({props, thisHour, graphWidth, blockWidth}) => {
    const canvasRef = useRef(null);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);
    const imageRef4 = useRef(null);
    const imageRef5 = useRef(null);
    const imageRef6 = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const image1 = imageRef1.current;
        const image2 = imageRef2.current;
        const image3 = imageRef3.current;
        const image4 = imageRef4.current;
        const image5 = imageRef5.current;
        const image6 = imageRef6.current;
        
        context.drawImage(image1, 0, 10)
        context.drawImage(image2, blockWidth, 10)
        context.drawImage(image3, blockWidth*2, 10)
        context.drawImage(image4, blockWidth*3, 10)
        context.drawImage(image5, blockWidth*4, 10)
        context.drawImage(image6, blockWidth*5, 10)
    });
    // }, []); // <= ,[] this means only execute the render once? https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

    return (
        <div>
            <canvas ref={canvasRef} width={graphWidth} height="50" {...props}/>
            <img ref={imageRef1} className="hidden" width={"50px"} height={"50px"} alt={"icon"} src={`http://openweathermap.org/img/w/${thisHour[0].weather[0].icon}.png`}/>
            <img ref={imageRef2} className="hidden" width={"50px"} height={"50px"} alt={"icon"} src={`http://openweathermap.org/img/w/${thisHour[3].weather[0].icon}.png`}/>
            <img ref={imageRef3} className="hidden" width={"50px"} height={"50px"} alt={"icon"} src={`http://openweathermap.org/img/w/${thisHour[6].weather[0].icon}.png`}/>
            <img ref={imageRef4} className="hidden" width={"50px"} height={"50px"} alt={"icon"} src={`http://openweathermap.org/img/w/${thisHour[9].weather[0].icon}.png`}/>
            <img ref={imageRef5} className="hidden" width={"50px"} height={"50px"} alt={"icon"} src={`http://openweathermap.org/img/w/${thisHour[12].weather[0].icon}.png`}/>
            <img ref={imageRef6} className="hidden" width={"50px"} height={"50px"} alt={"icon"} src={`http://openweathermap.org/img/w/${thisHour[15].weather[0].icon}.png`}/>
        </div>
    )
}

export default IconBar;