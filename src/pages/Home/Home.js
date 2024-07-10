import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from '../../content/data/carousel.json';
import GetInTouchForm from '../../components/Utilities/GetInTouchForm';
import Testimonial from '../../components/Testimonial/Testimonial';
import Heading from '../../components/Utilities/Heading';
import { useNavigate } from 'react-router-dom';
import CustomOwlCarousel from '../../components/CustomOwlCarousel/CustomOwlCarousel';
import { FaArrowDown } from 'react-icons/fa';

const Home = (props) => {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    const gotoHandler = () => {
        navigate('/menu');
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const visibleThreshold = 100; // Adjust as needed

            if (currentScrollY > visibleThreshold) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        // Event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth' // Smooth scroll animation
            });
        }
    };

    const imageSources = ['pdf/1.png', 'pdf/2.png', 'pdf/3.png', 'pdf/4.png', 'pdf/5.png', 'pdf/7.png'];

    return (
        <>
            <div className='car-wrapper'>
                <Carousel id="myCarousel" carouselData={CarouselData} prevText="Prev" nextText="Next" />
                <span className={`down-arrow ${isVisible ? '' : 'hidden'}`} onClick={() => scrollToSection('service')}><FaArrowDown /></span>
            </div>



            <div className='container our-service-main-wrapper home' id='service'>

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