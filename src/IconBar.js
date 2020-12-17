import React from "react";

const IconBar = ({thisHour}) => {
    
    return (
        <div className="detailsGraphIcons">
            <table>
                <tbody>
                    <tr>
                        <td style={{paddingLeft: "10px"}}><img width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[0].weather[0].icon}.png`}/></td>
                        <td style={{paddingLeft: "25px"}}><img width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[3].weather[0].icon}.png`}/></td>
                        <td style={{paddingLeft: "30px"}}><img width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[6].weather[0].icon}.png`}/></td>
                        <td style={{paddingLeft: "30px"}}><img width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[9].weather[0].icon}.png`}/></td>
                        <td style={{paddingLeft: "30px"}}><img width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[12].weather[0].icon}.png`}/></td>
                        <td style={{paddingLeft: "30px"}}><img width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[15].weather[0].icon}.png`}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default IconBar;

// import React, {useEffect, useRef} from "react";
// import "./IconBar.css";

// const IconBar = ({props, thisHour, graphWidth, blockWidth}) => {
    
//     const canvasRef = useRef(null);
//     const imageRef1 = useRef(null);
//     const imageRef2 = useRef(null);
//     const imageRef3 = useRef(null);
//     const imageRef4 = useRef(null);
//     const imageRef5 = useRef(null);
//     const imageRef6 = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext("2d");
//         const image1 = imageRef1.current;
//         const image2 = imageRef2.current;
//         const image3 = imageRef3.current;
//         const image4 = imageRef4.current;
//         const image5 = imageRef5.current;
//         const image6 = imageRef6.current;
        
//         context.clearRect(0, 0, 375, 60);
//         context.drawImage(image1, 0, 10);
//         context.drawImage(image2, blockWidth, 10);
//         context.drawImage(image3, blockWidth*2, 10);
//         context.drawImage(image4, blockWidth*3, 10);
//         context.drawImage(image5, blockWidth*4, 10);
//         context.drawImage(image6, blockWidth*5, 10);
        
//     },[blockWidth, canvasRef, imageRef1, imageRef2, imageRef3, imageRef4, imageRef5, imageRef6]);
//     // }, [blockWidth, canvasRef, imageRef1, imageRef2, imageRef3, imageRef4, imageRef5, imageRef6]);
//     // }, []); <= ,[] this means only execute the render once? https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//     // }, []); <= ,[] it appers here goes dependency for useEffect post-rendering; will read more https://medium.com/better-programming/understanding-the-useeffect-dependency-array-2913da504c44 

//     return (
//         <div>
//             <canvas ref={canvasRef} width={graphWidth} height="45" {...props}/>
//             <img ref={imageRef1} className="hidden" width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[0].weather[0].icon}.png`}/>
//             <img ref={imageRef2} className="hidden" width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[3].weather[0].icon}.png`}/>
//             <img ref={imageRef3} className="hidden" width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[6].weather[0].icon}.png`}/>
//             <img ref={imageRef4} className="hidden" width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[9].weather[0].icon}.png`}/>
//             <img ref={imageRef5} className="hidden" width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[12].weather[0].icon}.png`}/>
//             <img ref={imageRef6} className="hidden" width={"40px"} height={"40px"} alt={"icon"} src={`https://openweathermap.org/img/w/${thisHour[15].weather[0].icon}.png`}/>
//         </div>
//     )
// }

// export default IconBar;