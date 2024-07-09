import React from 'react';
import { useNavigate } from "react-router-dom";

const MenuCard = ({ imageUrl, heading, subHeading, paragraph, buttonLabel, urlLink }) => {

    const navigate = useNavigate();

    const gotoHandler = () => {
        navigate(`/service?name=${urlLink}`)
    };

    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="Card Image" />
            <div className="card-body">
                <span className='card-sub-heading'>{subHeading}</span>
                <h5 className="card-title text-center">{heading}</h5>
                <p className="card-text">{paragraph}</p>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={gotoHandler}>{buttonLabel}</button>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
