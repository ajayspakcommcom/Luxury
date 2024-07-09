import React from 'react';
import { useNavigate } from "react-router-dom";

const MenuCard = ({ imageUrl, heading, subHeading, paragraph, buttonLabel }) => {

    const navigate = useNavigate();

    const gotoHandler = () => {
        navigate('/menu')
    };

    return (
        <div className="card" onClick={gotoHandler}>
            <img src={imageUrl} className="card-img-top" alt="Card Image" />
            <div className="card-body">
                <span className='card-sub-heading'>{subHeading}</span>
                <h5 className="card-title text-center">{heading}</h5>
                <p className="card-text">{paragraph}</p>
                <div className="text-center">
                    <button className="btn btn-primary">{buttonLabel}</button>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
