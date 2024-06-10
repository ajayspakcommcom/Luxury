import React, { useState } from 'react';
import Heading from '../../components/Utilities/Heading';


const serviceList = [
    { id: 1, text: 'Change Coloring' },
    { id: 2, text: 'HairCuts' },
    { id: 3, text: 'Perfect Hairstyles' },
    { id: 4, text: 'Makeup' },
    { id: 5, text: 'Change Coloring' },
    { id: 6, text: 'HairCuts' },
    { id: 7, text: 'Perfect Hairstyles' },
    { id: 8, text: 'Makeup' },
    { id: 9, text: 'Change Coloring' },
    { id: 10, text: 'HairCuts' },
    { id: 11, text: 'Perfect Hairstyles' },
    { id: 12, text: 'Makeup' }
];

const Menu = (props) => {
    const [service, setService] = useState(serviceList);
    return (
        <div className='container our-service-main-wrapper'>
            <Heading class='text-center' heading='Our Menu' />
            <div className='our-service-wrapper'>

                {
                    service.map((item) =>
                        <div key={item.id}>
                            <img src={require('../../content/images/service/1.png')} />
                            <p>{item.text}</p>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Menu;