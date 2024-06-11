import React, { useEffect } from 'react';
import { initLightboxJS } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

const LightBoxGallery = ({ images }) => {

    useEffect(() => {
        initLightboxJS("Insert your License Key here", "Insert plan type here");
    }, []);

    return (
        <div className='container our-service-main-wrapper'>
            <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto our-service-wrapper">
                {images.map((image, index) => (
                    <img key={index} className="w-full rounded" src={image} alt={`Image ${index + 1}`} />
                ))}
            </SlideshowLightbox>
        </div>
    );
};

export default React.memo(LightBoxGallery);