import React, { useState, useEffect } from 'react';
import Heading from '../../components/Utilities/Heading';
import { getTextForTab } from '../../utility/Common';
import { useLocation } from 'react-router-dom';


const Menu = (props) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [activeTab, setActiveTab] = useState('hair-service');

    useEffect(() => {

        const param = queryParams.get('name');

        if (param) {
            setActiveTab(param)
        }

    }, [queryParams.get('name')]);

    const handleTabClick = (tabId) => {
        console.log(tabId)
        setActiveTab(tabId);
    };

    const hairServices = [
        { name: 'Fringe Hair Cut', price: '249' },
        { name: 'Child Haircut', price: '349*' },
        { name: 'Hair Trim with Wash', price: '599' },
        { name: 'Haircut With Wash', price: '699' },
        { name: 'Hair Wash With Conditioner', price: '399' },
        { name: 'Blowdry and Wash', price: '799*' },
        { name: 'Hair Crimping', price: '899*' },
        { name: 'Hair Ironing', price: '799*' },
        { name: 'Hair Perming', price: '3799*' },
        { name: 'Hair Smoothening / Botox / Keratin', price: '4999*' },
        { name: 'Hair Treatments', price: '2999*' },
        { name: 'Premium Hair Treatments', price: '3699*' },
        { name: 'Hair Spa', price: '1299*' },
        { name: 'Premium Hair Spa', price: '1999*' },
        { name: 'Scalp Massage', price: '699' },
    ],

        hairColour = [
            { name: 'Hair Colour (Touch Up)', price: '1699*' },
            { name: 'Global Hair Colour', price: '2499*' },
            { name: 'Non - Ammonia Hair Colour (Touch Up)', price: '1999*' },
            { name: 'Global Hair Colour Non - Ammonia', price: '2899*' },
            { name: 'Creative Hair Colouring', price: 'Price On Request' },
            { name: 'Crazy Colour', price: '399*' },
            { name: 'Henna', price: '499*' },
            { name: 'Streaking', price: '499*' }
        ],
        hairServicesMan = [
            { name: 'Hair Cut', price: '349' },
            { name: 'Hair Cut With Wash', price: '399' },
            { name: 'Shave', price: '249' },
            { name: 'Hair Wash', price: '199' },
            { name: 'Scalp Massage', price: '499' },
            { name: 'Beard Trim', price: '299' },
            { name: 'Beard Color', price: '649' },
            { name: 'Moustache Color', price: '399' },
            { name: 'Hair Color', price: '1299*' },
            { name: 'Non - Ammonia Hair Colour', price: '1499*' },
            { name: 'Henna', price: '449*' },
            { name: 'Hair Spa', price: '899*' },
            { name: 'Premium Hair Spa', price: '1399*' },
            { name: 'Hair Perming', price: '2999*' }
        ],
        skinCare = [
            { name: 'Clean Up', price: '649*' },
            { name: 'Refreshing Jelly Face Mask', price: '999*' },
            { name: 'Face Massage', price: '699' },
            { name: 'Facials', price: '1299*' },
            { name: 'Premium Facials', price: '1999*' },
            { name: 'Hydra Facial', price: '2499*' },
            { name: 'Anti Aging Treatment', price: '4199*' },
            { name: 'Advanced Facials', price: '3599*' },
            { name: 'Face Firming (With Lifting)', price: '3999*' },
            { name: 'Premium Skin Treatments', price: '5499*' },
            { name: 'Peels', price: '2499*' },
            { name: 'Skin Purifying', price: '3399*' }
        ],
        bleach = [
            { name: 'Face & Neck', price: '999*' },
            { name: 'Full Arms', price: '1299*' },
            { name: 'Full Legs', price: '1499*' },
            { name: 'Back', price: '1999*' },
            { name: 'Front', price: '1999*' },
            { name: 'Full Body', price: '2599*' }
        ],
        regularyWaxing = [
            { name: 'Upper Lips', price: '129' },
            { name: 'Side Locks', price: '249' },
            { name: 'Chin & Neck', price: '129' },
            { name: 'Full Face', price: '499' },
            { name: 'Underarms', price: '249' },
            { name: 'Full Arms', price: '449' },
            { name: 'Half Arms', price: '399' },
            { name: 'Half Legs', price: '449' },
            { name: 'Full Legs', price: '649' },
            { name: 'Front', price: '649' },
            { name: 'Back', price: '649' },
            { name: 'Full Body', price: '2799' }
        ],
        premiumWaxing = [
            { name: 'Upper Lips', price: '199' },
            { name: 'Side Locks', price: '299' },
            { name: 'Chin', price: '199' },
            { name: 'Full Face', price: '799' },
            { name: 'Full Arms', price: '899' },
            { name: 'Full Legs', price: '1299' },
            { name: 'Half Arms', price: '649' },
            { name: 'Half Legs', price: '799' },
            { name: 'Under Arms', price: '399' },
            { name: 'Front', price: '1399' },
            { name: 'Back', price: '1399' },
            { name: 'Full Body', price: '3799' },
            { name: 'Brazilian', price: '1899' },
            { name: 'Buttocks', price: '1899' },
            { name: 'Waxing Spa', price: '999*' }
        ],
        threading = [
            { name: 'Upper Lips', price: '49' },
            { name: 'Eyebrows', price: '69' },
            { name: 'Forehead', price: '69' },
            { name: 'Side Locks', price: '99' },
            { name: 'Full Face', price: '199' },
            { name: 'Chin', price: '49' },
            { name: 'Chin & Neck', price: '99' }
        ],
        handsFeet = [
            { name: 'Manicure', price: '799*' },
            { name: 'Pedicure', price: '999*' },
            { name: 'Premium Manicure', price: '1149*' },
            { name: 'Premium Pedicure', price: '1299*' },
            { name: 'Luxury Manicure', price: '1699*' },
            { name: 'Luxury Pedicure', price: '1999*' },
            { name: 'French Nail Polish', price: '249*' },
            { name: 'Gel Nail Polish (Feets)', price: '749*' },
            { name: 'Gel Nail Polish (Hands)', price: '749*' },
            { name: 'Gel Polish Removal', price: '399*' },
            { name: 'Weekly Gel Polish (Hands / Feet)', price: '299*' },
            { name: 'Nail Cut & File', price: '149' }
        ],
        nailsBrowsLashed = [
            { name: 'Nail Art', price: '899*' },
            { name: 'Acrylic Nail Extension', price: '2599*' },
            { name: 'Gel Nail Extension', price: '2599*' },
            { name: 'Gel / Acrylic Nail Removal', price: '999*' },
            { name: 'Eye Lashes Extension (Classic)', price: '4999*' },
            { name: 'Eye Lashes Extension (American)', price: '6599*' },
            { name: 'Eye Lash Lifting', price: '2999*' },
            { name: 'Lash Refill', price: 'Price On Request' },
            { name: 'Eye Brow Shaping (Microblading)', price: 'Price On Request' }
        ],
        massage = [
            { name: 'Aroma Body Massage', price: 2999 },
            { name: 'Aroma Head to Toe Massage', price: 3599 },
            { name: 'Ayurveda Massage (Magic Potli)', price: 3799 },
            { name: 'Deep Tissue Massage', price: 4199 },
            { name: 'Swedish Massage', price: 3999 },
            { name: 'Body Polish', price: 4199 },
            { name: 'Neck & Shoulder (30min)', price: 999 },
            { name: 'Back Massage (30min)', price: 1499 },
            { name: 'Foot Massage 30 min', price: 799 },
            { name: 'Foot Massage 60 min', price: 1299 },
            { name: 'Foot Reflexology 30 min', price: 1099 },
            { name: 'Foot Reflexology 60 min', price: 1699 },
            { name: 'Hand Reflexology 30 min', price: 799 },
            { name: 'Hand Reflexology 60 min', price: 1299 }
        ],
        bridalServices = [
            { name: 'Bridal Make Up', price: 8999 },
            { name: 'Hair Do', price: 1399 },
            { name: 'Light Make Up', price: 3799 },
            { name: 'Saree Draping', price: 999 },
            { name: 'Eye Make Up', price: 1499 }
        ],
        customisedProgrammes = [];

    const tabs = [
        'hair-service',
        'hair-colour',
        'hair-services-men',
        'skin-care',
        'bleach',
        'regular-waxing',
        'premium-waxing',
        'threading',
        'hands-feet',
        'nails-brows-lashes',
        'massage',
        'bridal-services',
        'customised-programmes'
    ];

    return (
        <div className='container our-service-main-wrapper'>
            <Heading className='text-center' heading='Our Services' />

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'></div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <div className='menu-dropdown'>
                        <div className="dropdown">
                            <span>{getTextForTab(activeTab)}</span>
                            <button className="btn btn-default dropdown-toggle" type="button" id="tabDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="tabDropdown">
                                {tabs.map(tab => (
                                    <li key={tab} className={activeTab === tab ? 'active' : ''}>
                                        <a onClick={() => handleTabClick(tab)}>
                                            {getTextForTab(tab)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className="tab-content">
                <div id="hair-service" className={`tab-pane fade ${activeTab === 'hair-service' ? 'in active' : ''}`}>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>HAIR SERVICES</h3>
                            <ul className='menu-ul'>
                                {hairServices.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <div id="hair-colour" className={`tab-pane fade ${activeTab === 'hair-colour' ? 'in active' : ''}`}>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>HAIR COLOUR</h3>
                            <ul className='menu-ul'>
                                {hairColour.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <div id="hair-services-men" className={`tab-pane fade ${activeTab === 'hair-services-men' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>HAIR SERVICES - MEN</h3>
                            <ul className='menu-ul'>
                                {hairServicesMan.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="skin-care" className={`tab-pane fade ${activeTab === 'skin-care' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>SKIN CARE</h3>
                            <ul className='menu-ul'>
                                {skinCare.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="bleach" className={`tab-pane fade ${activeTab === 'bleach' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>BLEACH</h3>
                            <ul className='menu-ul'>
                                {bleach.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="regular-waxing" className={`tab-pane fade ${activeTab === 'regular-waxing' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>REGULAR WAXING</h3>
                            <ul className='menu-ul'>
                                {regularyWaxing.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="premium-waxing" className={`tab-pane fade ${activeTab === 'premium-waxing' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>PREMIUM WAXING</h3>
                            <ul className='menu-ul'>
                                {premiumWaxing.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="threading" className={`tab-pane fade ${activeTab === 'threading' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>THREADING</h3>
                            <ul className='menu-ul'>
                                {threading.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="hands-feet" className={`tab-pane fade ${activeTab === 'hands-feet' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>HANDS &amp; FEET</h3>
                            <ul className='menu-ul'>
                                {handsFeet.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="nails-brows-lashes" className={`tab-pane fade ${activeTab === 'nails-brows-lashes' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>NAILS, BROWS &amp; LASHES</h3>
                            <ul className='menu-ul'>
                                {nailsBrowsLashed.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="massage" className={`tab-pane fade ${activeTab === 'massage' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>MASSAGE</h3>
                            <ul className='menu-ul'>
                                {massage.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="bridal-services" className={`tab-pane fade ${activeTab === 'bridal-services' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>BRIDAL SERVICES</h3>
                            <ul className='menu-ul'>
                                {bridalServices.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="customised-programmes" className={`tab-pane fade ${activeTab === 'customised-programmes' ? 'in active' : ''}`}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'../menu/1.png'} alt='' className='img-responsive' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h3 className='menu-h3'>CUSTOMISED PROGRAMMES</h3>
                            <ul className='menu-ul'>
                                {customisedProgrammes.map((service, index) => (
                                    <li key={index}>
                                        <span>{service.name}</span>
                                        <span>{service.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Menu;