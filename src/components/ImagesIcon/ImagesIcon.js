import React from 'react';
import "./ImagesIcon.css" ;

const ImagesIcon = ({icon, handleClick}) => {
    return (
        <div className="imageBox" onClick={handleClick && handleClick}>
            <img className="image" src={icon && icon}/>
            
        </div>
    )
}

export default ImagesIcon;
