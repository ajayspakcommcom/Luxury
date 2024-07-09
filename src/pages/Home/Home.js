import React, { useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from '../../content/data/carousel.json';
import GetInTouchForm from '../../components/Utilities/GetInTouchForm';
import Testimonial from '../../components/Testimonial/Testimonial';
import Heading from '../../components/Utilities/Heading';
import { useNavigate } from 'react-router-dom';
import LightBoxGallery from '../../components/LightBoxGallery/LightBoxGallery';
import MenuCard from '../../components/MenuCard/MenuCard';


const serviceList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
];


const Home = (props) => {

    const [service, setService] = useState(serviceList);
    const navigate = useNavigate();

    const gotoHandler = () => {
        navigate('/menu');
    };

    const imageSources = ['pdf/1.png', 'pdf/2.png', 'pdf/3.png', 'pdf/4.png', 'pdf/5.png', 'pdf/7.png'];

    return (
        <>
            <Carousel id="myCarousel" carouselData={CarouselData} prevText="Prev" nextText="Next" />
            <div className='container our-service-main-wrapper home'>

                <Heading class='text-center' heading='Our Menu' />

                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <MenuCard imageUrl={'https://www.91-cdn.com/hub/wp-content/uploads/2024/04/iPhone-16-dummy-units-1.png'} heading={'Haircuts'} subHeading={'Lovely'} paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} buttonLabel={'Read More'} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <MenuCard imageUrl={'https://www.91-cdn.com/hub/wp-content/uploads/2024/04/iPhone-16-dummy-units-1.png'} heading={'Coloring'} subHeading={'Change'} paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} buttonLabel={'Read More'} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <MenuCard imageUrl={'https://www.91-cdn.com/hub/wp-content/uploads/2024/04/iPhone-16-dummy-units-1.png'} heading={'Hairstyles'} subHeading={`Perfect`} paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} buttonLabel={'Read More'} />
                    </div>
                </div>

                {/* <LightBoxGallery images={imageSources} />
                <div className='home-read-more'><a onClick={gotoHandler}>Read More...</a></div> */}

                {/* <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'><img src={'menu/1.png'} alt='' className='img-responsive' /></div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <h3 className='menu-h3'>HAIR SERVICES</h3>
                        <ul className='menu-ul'>
                            <li>
                                <span>Fringe Hair Cut </span>
                                <span>249</span>
                            </li>
                            <li>
                                <span>Child Haircut </span>
                                <span>349*</span>
                            </li>
                            <li>
                                <span>Hair Trim with Wash </span>
                                <span>599</span>
                            </li>
                            <li>
                                <span>Haircut With Wash</span>
                                <span>699</span>
                            </li>
                            <li>
                                <span>Hair Wash With Conditioner </span>
                                <span>399</span>
                            </li>
                            <li>
                                <span>Blowdry and Wash </span>
                                <span>799*</span>
                            </li>
                            <li>
                                <span>Hair Crimping </span>
                                <span>899*</span>
                            </li>
                            <li>
                                <span>Hair Ironing </span>
                                <span>799*</span>
                            </li>
                            <li>
                                <span>Hair Perming </span>
                                <span>3799*</span>
                            </li>
                            <li>
                                <span>Hair Smoothening / Botox / Keratin</span>
                                <span>4999*</span>
                            </li>
                            <li>
                                <span>Hair Treatments </span>
                                <span>2999*</span>
                            </li>
                            <li>
                                <span>Premium Hair Treatments</span>
                                <span>3699*</span>
                            </li>
                            <li>
                                <span>Hair Spa</span>
                                <span>1299*</span>
                            </li>
                            <li>
                                <span>Premium Hair Spa</span>
                                <span>1999*</span>
                            </li>
                            <li>
                                <span>Scalp Massage</span>
                                <span>699</span>
                            </li>
                        </ul>
                        <br />
                        <div className='home-read-more'><a onClick={gotoHandler}>Read More...</a></div>
                    </div>
                </div> */}

            </div>
            <Testimonial />
            <div className='container'>
                <div className='get-in-touch'>
                    <GetInTouchForm />
                </div>
            </div>
        </>
    );
};

export default Home;