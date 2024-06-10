import React from 'react';
import parse from "html-react-parser";

const CarouselItem = (props) => {
    return (
        <>
            <div className={props.class}>
                <img src={require(`../../content/images/carousel/${props.src}`)} alt={props.smallText} />
                <div className="carousel-caption">
                    <h3>{props.smallText}</h3>
                    <p>{parse(props.bigText)}</p>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;