import React, { useState } from 'react';
import Heading from '../../components/Utilities/Heading';


const serviceList = [
    { id: 1, text: 'Change Coloring' },
    { id: 2, text: 'HairCuts' },
    { id: 3, text: 'Perfect Hairstyles' },
    { id: 4, text: 'Makeup' }
];

const Service = (props) => {
    const [service, setService] = useState(serviceList);
    return (
        <div className='container our-service-main-wrapper'>
            <Heading class='text-center' heading='Our Services' />
            <div className='our-service-wrapper'>

                {
                    service.map((item) =>
                        <div key={item.id}>
                            <img src={require('../../content/images/service/1.png')} />
                            <p>Change Coloring </p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Service;