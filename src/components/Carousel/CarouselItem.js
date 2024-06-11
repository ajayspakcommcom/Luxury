import React from 'react';
import parse from "html-react-parser";

const CarouselItem = (props) => {

    console.log('props', props)

    return (
        <>
            <div className={props.class}>
                <img src={`carousel/${props.src}`} alt={props.smallText} />
                <div className="carousel-caption">
                    <h3>{parse(props.smallText)}</h3>
                    <p>{parse(props.bigText)}</p>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;