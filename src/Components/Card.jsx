import { useState } from "react";
import "./Card.css"

function Card({isImage, children, mainImage, hoverImage, mainAltText, hoverAltText}) {

     const [currentImage, setCurrentImage] = useState(() => (mainImage));
     const [currentImgAlt, setImageAlt] = useState();
     
    const handleOnMouseEnter = () => {
        setCurrentImage(hoverImage);
        setImageAlt(hoverAltText);
    }

    const handleOnMouseOut = () => {
        setCurrentImage(mainImage);
        setImageAlt(mainAltText)
    }

    return(
        <>
            {isImage ?  
        <div className="cardContainer" style={{width: "650px", height: "450px"}}>
             <div className="cardContentImg" onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
                <img className="projectImage" src={currentImage} alt={currentImgAlt} />
            </div>
            </div>
             :
             <div className="cardContainer" style={{width: "425px", height: "275px"}}>
             <div className="cardContents">
                {children}
            </div>
           </div>  
            }
           
        </>
    )
}

export default Card