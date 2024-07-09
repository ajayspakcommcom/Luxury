import React, { useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from '../../content/data/carousel.json';
import GetInTouchForm from '../../components/Utilities/GetInTouchForm';
import Testimonial from '../../components/Testimonial/Testimonial';
import Heading from '../../components/Utilities/Heading';
import { useNavigate } from 'react-router-dom';
import LightBoxGallery from '../../components/LightBoxGallery/LightBoxGallery';
import MenuCard from '../../components/MenuCard/MenuCard';
import CustomOwlCarousel from '../../components/CustomOwlCarousel/CustomOwlCarousel';


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

                <Heading class='text-center' heading='Our Services' />

                {/* <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <MenuCard imageUrl={'https://www.91-cdn.com/hub/wp-content/uploads/2024/04/iPhone-16-dummy-units-1.png'} heading={'Haircuts'} subHeading={'Lovely'} paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} buttonLabel={'Read More'} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <MenuCard imageUrl={'https://www.91-cdn.com/hub/wp-content/uploads/2024/04/iPhone-16-dummy-units-1.png'} heading={'Coloring'} subHeading={'Change'} paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} buttonLabel={'Read More'} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <MenuCard imageUrl={'https://www.91-cdn.com/hub/wp-content/uploads/2024/04/iPhone-16-dummy-units-1.png'} heading={'Hairstyles'} subHeading={`Perfect`} paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} buttonLabel={'Read More'} />
                    </div>
                </div> */}

                <CustomOwlCarousel />

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