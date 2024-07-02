import React, { useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from '../../content/data/carousel.json';
import GetInTouchForm from '../../components/Utilities/GetInTouchForm';
import Testimonial from '../../components/Testimonial/Testimonial';
import Heading from '../../components/Utilities/Heading';
import { useNavigate } from 'react-router-dom';
import LightBoxGallery from '../../components/LightBoxGallery/LightBoxGallery';


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
            <div className='container our-service-main-wrapper'>
                <Heading class='text-center' heading='Our Menu' />
                <LightBoxGallery images={imageSources} />
                <div className='home-read-more'><a onClick={gotoHandler}>Read More...</a></div>
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