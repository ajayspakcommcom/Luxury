import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MenuCard from '../MenuCard/MenuCard';
import { owlCarouselDataList } from '../../utility/AppData';



const CustomOwlCarousel = () => {

    const menuItems = [...owlCarouselDataList];

    const navPrevText = `<span><img src=${process.env.PUBLIC_URL}/icons/left.png className='icon-arrow' /></span>`;
    const navNextText = `<span><img src=${process.env.PUBLIC_URL}/icons/right.png className='icon-arrow' /></span>`;


    const owlOptions = {
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        navText: [
            navPrevText,
            navNextText
        ]
    };


    return (
        <>
            <OwlCarousel className='owl-theme' loop margin={10} nav {...owlOptions} id='owl-car-service'>
                {menuItems.map((item, index) => (
                    <MenuCard key={index} imageUrl={item.imageUrl} heading={item.heading} subHeading={item.subHeading} paragraph={item.paragraph} buttonLabel={item.buttonLabel} urlLink={item.urlLink} />
                ))}

            </OwlCarousel>
        </>
    );
};

export default CustomOwlCarousel;