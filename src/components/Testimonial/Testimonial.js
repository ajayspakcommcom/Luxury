
import { REVIEWS } from "../../utility/AppData";
import Heading from "../Utilities/Heading";
import Icons from "../Utilities/Icons";
import TestimonialItem from "./TestimonialItem";

const dataList = [...REVIEWS];

const Testimonial = (props) => {

    return (
        <div className='testimonials-wrapper'>
            <div className='container'>
                <Heading class='text-center' heading='Testimonials' />
                <div className='quote-wrapper'>
                    <img src={require('../../content/images/testimonial/quote.png')} />
                </div>

                <div id="testimonialCar" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {dataList.map((item, index) => (
                            <TestimonialItem data={dataList[index]} indx={index} key={index} />
                        ))}
                    </div>

                    <a className="left carousel-control" href="#testimonialCar" data-slide="prev">
                        <Icons icon='left-arrow' />
                    </a>
                    <a className="right carousel-control" href="#testimonialCar" data-slide="next">
                        <Icons icon='right-arrow' />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;