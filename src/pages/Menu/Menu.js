import React, { useState, useEffect } from 'react';
import Heading from '../../components/Utilities/Heading';
import LightBoxGallery from '../../components/LightBoxGallery/LightBoxGallery';


const Menu = (props) => {

    const imageSources = [
        'pdf/1.png',
        'pdf/2.png',
        'pdf/3.png',
        'pdf/4.png',
        'pdf/5.png',
        'pdf/7.png'
    ];

    return (
        <div className='container our-service-main-wrapper'>
            <Heading class='text-center' heading='Our Menu' />
            <LightBoxGallery images={imageSources} />
        </div>
    );
};

export default Menu;